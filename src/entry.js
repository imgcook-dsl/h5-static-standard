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

  // styles
  const styles = [];

  const styles4vw = [];

  const styles4rem = [];

  // Global Public Functions
  const utils = [];

  const width = responsive.width || 750;
  const viewportWidth = responsive.viewportWidth || 375;
  const htmlFontsize = viewportWidth ? viewportWidth / 10 : null;

  // 1vw = width / 100
  const _w = width / 100;

  const _ratio = width / viewportWidth;

  let isPage = false;
  let htmlBody = '';

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

  let classNames = [];

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

    if (className && classNames.indexOf(className) === -1) {
      classNames.push(className);
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
      if ([ 'className', 'style', 'text', 'key', 'codeStyle', 'onClick', 'lines', 'dealGradient' ].indexOf(key) === -1) {
        props += ` ${key}=${parseProps(schema.props[key])}`;
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
        if (schema.props.source && schema.props.source.uri) {
          xml = `<img ${classString}${props} />`;
        } else {
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
          xml = `<div${classString}${props} ></div>`;
        }
        break;
      default:
        collectImports(schema.componentName);
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
  const transform = (schema, flag) => {
    let result = '';
    const blockName = schema.fileName || schema.id;
    if (flag && schema.componentName === 'Page') {
      isPage = true;
    }
    if (Array.isArray(schema)) {
      schema.forEach((layer) => {
        result += transform(layer);
      });
    } else {
      let type = schema.componentName.toLowerCase();
      if (isPage && type === 'block') {
        type = 'div';
      }
      result += generateRender(schema);
      htmlBody = generateRender(schema);
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
  transform(schema, true);
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
  // const htmlBody = generateRender(schema);
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
