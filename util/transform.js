
/**
 * 注册组件的文本
 * @param {Array<{name: string;file: string;}>} mdList 组件名称
 */
function registryComponentsText(mdList) {
  const imrComponents = mdList
    .map(md => `import ${md.name} from "md/${md.file}";`)
    .join("\n");
  const eprComponents = `export default {
    ${mdList
      .map(md => `${md.name}: ${md.name},`)
      .join("\n")
    }
  };`
  return `
    ${imrComponents}

    ${eprComponents}
  `;
}



module.exports = {
  registryComponentsText: registryComponentsText
}