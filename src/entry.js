const {
  toString,
  existImport,
  parseLoop,
  parseStyle,
  deepClone,
  parseFunction,
  parseProps,
  parseState,
  parseLifeCycles,
  replaceState,
  parseCondition,
  generateCSS,
  parseDataSource,
  line2Hump,
  getText,
  isExpression
} = require('./utils');

function exportMod(schema, option) {
  const { prettier, scale = 1, componentsMap, _, responsive } = option;

  const fileName = schema.fileName || 'index';

  // imports
  let imports = [];

  // imports mods
  let importMods = [];

  // inline style
  const style = {};

  const styleRpx = {};

  // styles
  const styles = [];

  const styles4vw = [];

  const styles4rem = [];

  // Global Public Functions
  const utils = [];

  // states
  let statesData = null;

  // useState
  let useState = [];

  // methods
  const methods = [];

  // life cycles
  let lifeCycles = [];

  // init
  const init = [];

  const width = responsive.width || 750;
  const viewportWidth = responsive.viewportWidth || 375;
  const htmlFontsize = viewportWidth ? viewportWidth / 10 : null;

  // 1vw = width / 100
  const _w = width / 100;

  const _ratio = width / viewportWidth;

  const collectImports = (componentName) => {
    let componentMap = componentsMap[componentName] || {};
    let packageName = componentMap.package || componentMap.packageName || componentName;
    if (packageName && [ 'view', 'image', 'text', 'picture' ].indexOf(packageName.toLowerCase()) >= 0) {
      packageName = `rax-${packageName.toLowerCase()}`;
    }
    const singleImport = `import ${componentName} from '${packageName}'`;
    if (!existImport(imports, singleImport)) {
      imports.push({
        import: singleImport,
        package: packageName,
        version: componentMap.dependenceVersion || '*'
      });
    }
  };

  // generate render xml
  const generateRender = (schema) => {
    const componentName = schema.componentName;
    const type = schema.componentName.toLowerCase();
    const className = schema.props && schema.props.className;
    const classString = className ? ` class="${className}"` : '';

    let commonStyles = {};
    let codeStyles = {};
    Object.keys(schema.props.style || {}).forEach((key) => {
      if (key === 'lines') return;
      if (isExpression(schema.props.style[key])) {
        codeStyles[key] = schema.props.style[key];
      } else {
        commonStyles[key] = schema.props.style[key];
      }
    });

    schema.props.codeStyle = codeStyles;

    if (className) {
      styles.push(`
        .${className} {
          ${parseStyle(commonStyles, { _, responsive })}
        }
      `);
      styles4vw.push(`
        .${className} {
          ${parseStyle(commonStyles, { toVW: true, _, responsive })}
        }
      `);
      styles4rem.push(`
        .${className} {
          ${parseStyle(commonStyles, { toREM: true, _, responsive })}
        }
      `);
    }

    let xml;
    let props = '';

    Object.keys(schema.props).forEach((key) => {
      if ([ 'className', 'style', 'text', 'src', 'key', 'codeStyle', 'onClick', 'lines' ].indexOf(key) === -1) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }
      if (key === 'codeStyle') {
        if (JSON.stringify(schema.props[key]) !== '{}') {
          props += ` style={${parseProps(schema.props[key])}}`;
        }
      }
    });

    switch (type) {
      case 'text':
        let innerText = parseProps(schema.props.text || schema.text, true);
        if (innerText.match(/this\.props/)) {
          innerText = innerText.replace(/this\./, '');
        }
        xml = `<span ${classString}${props}>${innerText || ''}</span>`;
        break;
      case 'image':
        // if (!props.match('onClick')) {
        //   props += ' aria-hidden={true}';
        // }
        if (schema.props.source && schema.props.source.uri) {
          xml = `<img ${classString}${props} />`;
        } else {
          // let source = parseProps(schema.props.src);
          // source = (source && `source={{uri: ${source}}}`) || '';
          xml = `<img ${classString}${props} />`;
        }
        break;
      case 'div':
      case 'view':
      case 'page':
      case 'block':
      case 'component':
        if (schema.children && schema.children.length) {
          xml = `<div${classString}${props}>${transform(schema.children)}</div>`;
        } else {
          xml = `<div${classString}${props} />`;
        }
        break;
      default:
        // collectImports(schema.componentName);
        if (schema.children && schema.children.length && Array.isArray(schema.children)) {
          xml = `<${componentName}${classString}${props}>${transform(schema.children)}</${componentName}>`;
        } else if (typeof schema.children === 'string') {
          xml = `<${componentName}${classString}${props} >${schema.children}</${componentName}>`;
        } else {
          xml = `<${componentName}${classString}${props} />`;
        }
    }

    return xml;
  };

  // parse schema
  const transform = (schema) => {
    let result = '';
    const blockName = schema.fileName || schema.id;
    if (Array.isArray(schema)) {
      schema.forEach((layer) => {
        result += transform(layer);
      });
    } else {
      const type = schema.componentName.toLowerCase();

      if ([ 'page' ].indexOf(type) !== -1 || blockName === fileName) {
        // 容器组件处理: state/method/dataSource/lifeCycle
        const states = [];

        if (schema.state) {
          states.push(`state = ${toString(schema.state)}`);
          statesData = toString(schema.state);
        }

        if (schema.methods) {
          Object.keys(schema.methods).forEach((name) => {
            const { params, content } = parseFunction(schema.methods[name]);
            methods.push(`function ${name}(${params}) {${content}}`);
          });
        }

        if (schema.dataSource && Array.isArray(schema.dataSource.list)) {
          schema.dataSource.list.forEach((item) => {
            if (typeof item.isInit === 'boolean' && item.isInit) {
              init.push(`${item.id}();`);
            } else if (typeof item.isInit === 'string') {
              init.push(`if (${parseProps(item.isInit)}) { ${item.id}(); }`);
            }
            const parseDataSourceData = parseDataSource(item, imports);
            methods.push(parseDataSourceData.value);
            imports = parseDataSourceData.imports;
          });

          if (schema.dataSource.dataHandler) {
            const { params, content } = parseFunction(schema.dataSource.dataHandler);
            methods.push(`const dataHandler = (${params}) => {${content}}`);
            init.push(`dataHandler()`);
          }
        }

        if (schema.lifeCycles) {
          lifeCycles = parseLifeCycles(schema, init);
        }

        if (statesData) {
          useState.push(parseState(statesData));
        }
      } else if ([ 'block' ].indexOf(type) !== -1) {
        let props = '';
        Object.keys(schema.props).forEach((key) => {
          if ([ 'className', 'style', 'text', 'src', 'key' ].indexOf(key) === -1) {
            props += ` ${key}={${parseProps(schema.props[key])}}`;
          }
        });

        result += `<${line2Hump(blockName)} ${props} />`;

        importMods.push({
          import: `import ${line2Hump(blockName)} from '../${blockName}';`
        });
      } else {
        result += generateRender(schema);
      }
    }

    return result;
  };

  // option.utils
  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // start parse schema
  transform(schema);

  // output
  const prettierHtmlOpt = {
    parser: 'html',
    printWidth: 120,
    singleQuote: true
  };
  const prettierCssOpt = {
    parser: 'css'
  };
  const prettierJsOpt = {
    parser: 'babel',
    printWidth: 120,
    singleQuote: true
  };
  const htmlBody = generateRender(schema);

  const indexValue = prettier.format(
    `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css" />
    <script src="./index.js"></script>
  </head>
  <body>
  ${htmlBody}
  </body>
  </html>
  `,
    prettierHtmlOpt
  );

  const indexValueJs = prettier.format(`window.onload = () => {
  const data = {};
  const $ = window.document.querySelector.bind(window.document);
};`, prettierJsOpt);

  return {
    panelDisplay: [
      {
        panelName: `${fileName}.html`,
        panelValue: indexValue,
        panelType: 'BuilderRaxView',
        panelImports: imports
      },
      {
        panelName: `${fileName}.js`,
        panelValue: indexValueJs,
        panelType: 'BuilderRaxIndex'
      },
      {
        panelName: `${fileName}.css`,
        panelValue: prettier.format(styles.join('\n'), prettierCssOpt),
        panelType: 'BuilderRaxStyle'
      },
      {
        panelName: `${fileName}.vw.css`,
        panelValue: prettier.format(styles4vw.join('\n'), prettierCssOpt),
        panelType: 'BuilderRaxStyle'
      },
      {
        panelName: `${fileName}.rem.css`,
        panelValue: prettier.format(styles4rem.join('\n'), prettierCssOpt),
        panelType: 'BuilderRaxStyle'
      }
    ],
    noTemplate: true
  };
}

module.exports = exportMod;
