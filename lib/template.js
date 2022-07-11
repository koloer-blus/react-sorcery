//@ts-check
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

//@ts-check
/**
 * 生成routes template
 * @param {{name:string;title:string;index?:boolean;path:string;routePath?:string;}[]} filePathList 
 */
export const generateReactRouterTemplate = function(filePathList) {
    const routeElements = filePathList.reduce((p, c, i) => {
        p = p + `{ index: !!item.index,path: item.routePath, element: <${c.name}/>},`
        if (i === filePathList.length - 1) {
            p += '];'
        };
        return p;
    }, 'export const pageRoutes = [');
    const esModels = filePathList.reduce((p, c) => {
        return p + `import ${c.name} from "@/pages/${c.name}";`
    }, '');
    return `${esModels}${routeElements}`
}

//@ts-check
/**
 * 生成path映射json
 * @param {{name:string;path:string;}[]} fileList 
 */
export const generatePathJSONTemplate = function(fileList) {

}