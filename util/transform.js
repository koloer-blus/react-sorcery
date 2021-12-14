/**
 * 将 HTML string 转化成 ReactPage string
 * @param {string} docTitle 页面名称
 * @param {string} componentName 组件名称
 * @param {string} HTML 转化后的HTML string
 */
function transformHTMLtoReactPage(docTitle, componentName, HTML) {

  const pageTemplate = `
    // ${docTitle}.md
    import * as React from 'react';
    import useDocumentTitle from 'hooks/useDocumentTitle';

    const ${componentName} = () => {
        useDocumentTitle("${docTitle}");
        return (
          <React.Fragment>
            ${HTML}
          </React.Fragment>
        );
      };

    export default ${componentName};
  `;

  return pageTemplate;
}


/**
 * 注册组件的文本
 * @param {Array<string>} components 组件名称
 */
function registryComponentsText(components) {
  const imrComponents = components
    .map(component => `import ${component} from "pages/${component}";`)
    .join("\n");
  const eprComponents = `export default {
    ${components
      .map(component => `${component}: <${component} />,`)
      .join("\n")
    }
  };`
  return `
    ${imrComponents}

    ${eprComponents}
  `;
}



module.exports = {
  transformHTMLtoReactPage: transformHTMLtoReactPage,
  registryComponentsText: registryComponentsText
}