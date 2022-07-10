/**
 * 生成React组件
 * @param {string} name 组件Name,最好使用驼峰
 * @param {string} component 组件代码字符串
 * @param {string} title 组件名称
 */
export const generateReactFCTemplate = function(name, component, title = '') {
    return `import * as React from 'react';import * as hooks from '@/hooks';
    const ${name}:React.FC = () => {
      hooks.useDocumentTitle(${title});
      return(<React.Fragment>${component}</React.Fragment>);
    }
    export default ${name};
  `;
}