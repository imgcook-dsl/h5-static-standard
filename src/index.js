module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const{toString:r,existImport:o,parseLoop:s,parseStyle:a,deepClone:i,parseFunction:p,parseProps:c,parseState:l,parseLifeCycles:d,replaceState:u,parseCondition:f,generateCSS:m,parseDataSource:h,line2Hump:y,getText:$,isExpression:g}=n(1);e.exports=function(e,t){const{prettier:n,scale:r=1,componentsMap:s,_:i,responsive:p}=t,l=e.fileName||"index";let d=[];const u=[],f=[],m=[],h=[];p.width,p.viewportWidth;let y=!1,$="";const b=e=>{const t=e.componentName,n=e.componentName.toLowerCase(),r=e.props&&e.props.className,l=r?` class="${r}"`:"";let h,y={},$={};Object.keys(e.props.style||{}).forEach(t=>{"lines"!==t&&(g(e.props.style[t])?$[t]=e.props.style[t]:y[t]=e.props.style[t])}),e.props.codeStyle=$,r&&(u.push(`\n        .${r} {\n          ${a(y,{_:i,responsive:p})}\n        }\n      `),f.push(`\n        .${r} {\n          ${a(y,{toVW:!0,_:i,responsive:p})}\n        }\n      `),m.push(`\n        .${r} {\n          ${a(y,{toREM:!0,_:i,responsive:p})}\n        }\n      `));let b="";switch(Object.keys(e.props).forEach(t=>{-1===["className","style","text","key","codeStyle","onClick","lines","dealGradient"].indexOf(t)&&(b+=` ${t}=${c(e.props[t])}`),"codeStyle"===t&&"{}"!==JSON.stringify(e.props[t])&&(b+=` style={${c(e.props[t])}}`)}),n){case"text":let n=c(e.props.text||e.text,!0);n.match(/this\.props/)&&(n=n.replace(/this\./,"")),h=`<span ${l}${b}>${n||""}</span>`;break;case"image":h=(e.props.source&&e.props.source.uri,`<img ${l}${b} />`);break;case"div":case"view":case"page":case"block":case"component":h=e.children&&e.children.length?`<div${l}${b}>${x(e.children)}</div>`:`<div${l}${b} ></div>`;break;default:(e=>{let t=s[e]||{},n=t.package||t.packageName||e;n&&["view","image","text","picture"].indexOf(n.toLowerCase())>=0&&(n="rax-"+n.toLowerCase());const r=`import ${e} from '${n}'`;o(d,r)||d.push({import:r,package:n,version:t.dependenceVersion||"*"})})(e.componentName),h=e.children&&e.children.length&&Array.isArray(e.children)?`<${t}${l}${b}>${x(e.children)}</${t}>`:"string"==typeof e.children?`<${t}${l}${b} >${e.children}</${t}>`:`<${t}${l}${b} />`}return h},x=(e,t)=>{let n="";e.fileName||e.id;if(t&&"Page"===e.componentName&&(y=!0),Array.isArray(e))e.forEach(e=>{n+=x(e)});else{let t=e.componentName.toLowerCase();y&&"block"===t&&(t="div"),n+=b(e),$=b(e)}return n};t.utils&&Object.keys(t.utils).forEach(e=>{h.push(`const ${e} = ${t.utils[e]}`)}),x(e,!0);const S={parser:"css"},w=n.format(`\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <link rel="stylesheet" href="./index.css" />\n    <script src="./index.js"><\/script>\n  </head>\n  <body>\n  ${$}\n  </body>\n  </html>\n  `,{parser:"html",printWidth:120,singleQuote:!0}),j=n.format("window.onload = () => {\n  const data = {};\n  const $ = window.document.querySelector.bind(window.document);\n};",{parser:"babel",printWidth:120,singleQuote:!0});return{panelDisplay:[{panelName:l+".html",panelValue:w,panelType:"BuilderRaxView",panelImports:d},{panelName:l+".js",panelValue:j,panelType:"BuilderRaxIndex"},{panelName:l+".css",panelValue:n.format(u.join("\n"),S),panelType:"BuilderRaxStyle"},{panelName:l+".vw.css",panelValue:n.format(f.join("\n"),S),panelType:"BuilderRaxStyle"},{panelName:l+".rem.css",panelValue:n.format(m.join("\n"),S),panelType:"BuilderRaxStyle"}],noTemplate:!0}}},function(e,t){const n=["opacity","fontWeight","WebkitLineClamp"],r=["fontSize","marginTop","marginBottom","paddingTop","paddingBottom","height","top","bottom","width","maxWidth","left","right","paddingRight","paddingLeft","marginLeft","marginRight","lineHeight","borderBottomRightRadius","borderBottomLeftRadius","borderTopRightRadius","borderTopLeftRadius","borderRadius"],o=e=>/^\{\{.*\}\}$/.test(e),s=(e,t)=>e=t?e.slice(1,-1).replace(/this\./gim,""):e.slice(2,-2).replace(/this\./gim,""),a=e=>"[object Function]"==={}.toString.call(e)?e.toString():"string"==typeof e?e:"object"==typeof e?JSON.stringify(e,(e,t)=>"function"==typeof t?t.toString():t):String(e),i=e=>e.charAt(0).toUpperCase()+e.slice(1),p=e=>{let t=Array.isArray(e)?[]:{};if(e&&"object"==typeof e)for(const n in e)e.hasOwnProperty(n)&&(e[n]&&"object"==typeof e[n]?t[n]=p(e[n]):t[n]=e[n]);return t},c=e=>{const t=e.toString();return{params:t.match(/\([^\(\)]*\)/)[0].slice(1,-1),content:t.slice(t.indexOf("{")+1,t.lastIndexOf("}"))}},l=(e,t)=>{if("string"==typeof e)return o(e)?s(e,t):t?e:`'${e}'`;if("function"==typeof e){const{params:t,content:n}=c(e);return`(${t}) => {${n}}`}return"boolean"==typeof e||"number"==typeof e?String(e):"object"==typeof e?Array.isArray(e)?`[${e.map(e=>l(e)).join(", ")}]`:`{${Object.keys(e).map(t=>`${/^\w+$/.test(t)?t:`'${t}'`}: ${l(e[t])}`).join(", ")}}`:void 0},d=(e,t)=>"boolean"==typeof e?e?""+t:"":"string"==typeof e&&o(e)?(e=s(e))?`(${e}) && ${t}`:""+t:t,u=e=>(e=e.split(/(?=[A-Z])/).join("-"),/^[A-Z].*/.test(e)&&(e="-"+e),e.toLowerCase()),f=e=>{const t=new RegExp("this.state","g");return e.replace(t,"state")},m=(e,t)=>{let n=!1;return e.forEach(e=>{e.import===t&&(n=!0)}),n};e.exports={isExpression:o,toString:a,transComponentsMap:(e={})=>{if(!e||!Array.isArray(e.list))return[];return e.list.reduce((e,t)=>{const n=t.name;if(!e[n]){try{let e=JSON.parse(t.dependence);e&&(t.packageName=e.package),t.dependenceVersion||(t.dependenceVersion="*"),/^\d/.test(t.dependenceVersion)&&(t.dependenceVersion="^"+t.dependenceVersion)}catch(e){}e[n]=t}return e},{})},line2Hump:e=>e=(e=e.replace(/[_|-](\w)/g,(e,t)=>t.toUpperCase())).charAt(0).toUpperCase()+e.slice(1),existImport:m,toUpperCaseStart:i,parseStyle:(e,t={})=>{const{toVW:o,toREM:s,responsive:a}=t,i=a.width||750,p=a.viewportWidth||375,c=p?p/10:null,l=i/100,d=[];for(let t in e){let a=e[t];if(-1!=r.indexOf(t)&&"string"==typeof a&&a.match("px")){if(o)a=(parseInt(a)/l).toFixed(2),a=0==a?a:a+"vw";else if(s&&c){const e=(("string"==typeof a?a.replace(/(px)|(rem)/,""):a)*(p/i)).toFixed(2);a=parseFloat((e/c).toFixed(2)),a=a?a+"rem":a}else a=parseInt(a).toFixed(2),a=0==a?a:a+"px";d.push(`${u(t)}: ${a}`)}else if(-1!=n.indexOf(t))"string"==typeof a&&a.match("px")?d.push(`${u(t)}: ${parseFloat(a)}`):d.push(`${u(t)}: ${a}`);else{if("fontFamily"===t){const e=a.split(","),t=[];e.length&&e.map(e=>{/\s/g.test(e)&&!/\"/g.test(e)?t.push(`"${e.replace(/(^\s*)|(\s*$)/g,"")}"`):t.push(e)}),a=t.join(",")}d.push(`${u(t)}: ${a}`)}}return d.join(";")},deepClone:p,parseDataSource:(e,t)=>{const n=e.id,{uri:r,method:s,params:i}=e.options,p=e.type;let d,u={};switch(p){case"fetch":d="import {fetch} from 'whatwg-fetch';",m(t,d)||t.push({import:d,package:"whatwg-fetch",version:"^3.0.0"}),u={method:s};break;case"jsonp":d="import {fetchJsonp} from 'fetch-jsonp';",m(t,d)||t.push({import:d,package:"fetch-jsonp",version:"^1.1.3"})}Object.keys(e.options).forEach(t=>{-1===["uri","method","params"].indexOf(t)&&(u[t]=a(e.options[t]))});let f=null===(h=u)||"[object Object]"!==Object.prototype.toString.call(h)||Object.keys(h).length?",":"";var h;u=i?`${a(u).slice(0,-1)} ${f} body: ${o(i)?l(i):a(i)}}`:a(u);let y=`{\n  return ${p}(${l(r)}, ${a(u)})\n    .then((response) => response.json())\n`;if(e.dataHandler){const{params:t,content:n}=c(e.dataHandler);y+=`.then((${t}) => {${n}})\n    .catch((e) => {\n      console.log('error', e);\n    })\n  `}return y+="}",{value:`function ${n}() ${y}`,imports:t}},parseFunction:c,parseLoop:(e,t,n,r,i)=>{let p,c=t&&t[0]||"item",l=t&&t[1]||"index";Array.isArray(e)?p=a(e):o(e)&&(p=s(e)||"[]");const u=n.match(/^<.+?(\s|\b(?=>))/)[0].length;n=`${n.slice(0,u)} key={${l}}${n.slice(u)}`;const f=new RegExp("this."+c,"g");n=n.replace(f,c);let m=p;return p.match(/this\.state\./)&&(m="state."+p.split(".").pop()),i.condition&&(n=d(i.condition,n)),{hookState:[],value:`(${m} || []).map((${c}, ${l}) => {\n      return (${n});\n    })`}},parseCondition:d,parseProps:l,parseState:e=>`const [state, set${i("state")}] = useState(${a(JSON.parse(e))||null});`,parseLifeCycles:(e,t)=>{let n=[];return!e.lifeCycles._constructor&&t&&(e.lifeCycles._constructor="function _constructor() {}"),Object.keys(e.lifeCycles).forEach(r=>{let{params:o,content:s}=c(e.lifeCycles[r]);switch(s=f(s),r){case"_constructor":t.push(s),n.unshift(`\n          // constructor\n          useState(()=>{\n            ${t.join("\n")}\n          })\n        `);break;case"componentDidMount":n.push(`\n          // componentDidMount\n          useEffect(()=>{\n            ${s}\n          }, [])\n        `);break;case"componentDidUpdate":n.push(`\n          // componentDidUpdate\n          useEffect(()=>{\n            ${s}\n          })\n        `);break;case"componentWillUnMount":n.push(`\n          // componentWillUnMount\n          useEffect(()=>{\n            return ()=>{\n              ${s}\n            }\n          }, [])\n        `)}}),n},replaceState:f,generateCSS:e=>{let t="";for(let n in e){t+=`.${n} {`;for(let r in e[n])t+=`${u(r)}: ${e[n][r]};\n`;t+="}"}return t},getText:e=>{let t="";const n=e=>{"text"===e.componentName.toLowerCase()&&(t+=l(e.props.text||e.text,!0).replace(/\{/g,"${")),e.children&&Array.isArray(e.children)&&e.children.map(e=>{n(e)})};return n(e),t}}}]);