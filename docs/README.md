# ReactPress📖

> React驱动的Markdown网站生成器

## 项目介绍`React`驱动的`Markdown`网站生成器

## 如何React驱动的Markdown网站生成器 了解基本操作

1. 初始化项目

  - `clone` 项目

    ```bash
    git clone git@github.com:baiziyu-fe/ReactPress.git
    ```

  - 删除原本的`.git`信息
  
  - 加载你本地的`.git`信息
  
  - 安装依赖
    - 执行`npm install` 或者 `npm i`
  - 移入对应的`MarkDown`文件到`docs`目录下

2. 了解基本操作

    - 本地构建(进行数据转化)：`npm run md:build`
    - 本地构建 + 服务预览：`npm run docs:dev`
    - 本地构建 + 打包成静态页面：`npm run docs:build`
    - 本地构建 + 打包成静态页面 + 启动静态服务器预览：`npm run docs:preview`

3. 部署到静态服务器（以部署到`Github Pages`为例）
  - 设置正确的`base`名称选项
    - 如果你准备发布到 `https://<USERNAME>.github.io/` ，删除项目根目录下`vite.config.js`的`base`配置即可。
    - 如果你准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>` ，则将项目根目录下`vite.config.js`的 `base` 设置为 "/<REPO>/"。
  - `git push` 提交代码到远端自动执行`github Actions` 进行静态部署

## 后续计划

[ ] 界面美化

[ ] 全局搜索

[ ] 自定义主题

[ ] 插件系统

## 希望自定义

> 想要对项目自定义需要一定的`Javascript`和`React`的编程经验

1. 自定义项目目录：根目录下`src`文件夹
2. 目录介绍
```
│  App.jsx  >>> App组件，ReactRouter使用
│  main.jsx >>> 主入口文件
│  registry.jsx >>> 已经注册的React 页面，也就是转化后的文档对象（✅自动生成）
│  route.config.json >>> 项目的路由配置（✅自动生成）
│  router.jsx >>> 读取路由文件，传递注册路由信息
│
├─components >>> 项目中的组件
│  ├─footer  >>> 底部
│  └─header  >>> 顶部
│          header.module.less >>> LESS modules
│          index.jsx  >>> Header 布局以及展示
│          search.jsx >>> 搜索栏
│
├─context >>> 预留
├─hooks >>> React 自定义 hooks
│      useDocumentTitle.js  >>> 设置文档的`document.title`
│
├─md  >>> 转化后的文档存储位置
│      DOC_MD__1.md.json  >>> 转化后的文档json信息（✅自动生成）
│
├─pages >>> 页面
│  ├─doc  >>> 文档页面
│  │      doc.module.less >>> 文档页面Less Modules
│  │      index.jsx >>> 文档页面
│  │      left-nav.jsx  >>> 左侧标题展示
│  │      markdown.jsx  >>> 转化后的`MarkDown`展示
│  │
│  └─user >>> 预留
├─public  >>> public 资源
└─style
    │  theme.css  >>> 主题CSS `需要替换的可以直接替换该文件，确保引入文件名相同就行` [gitbook theme](https://theme.typora.io/theme/Gitbook/)
    │
    └─gitbook >>> 主题配套文件
            fonts.css
            old-slate-colors.css
            Roboto-Black.ttf
            Roboto-BlackItalic.ttf
            Roboto-Bold.ttf
            Roboto-BoldItalic.ttf
            Roboto-Italic.ttf
            Roboto-Light.ttf
            Roboto-LightItalic.ttf
            Roboto-Medium.ttf
            Roboto-MediumItalic.ttf
            Roboto-Regular.ttf
            Roboto-Thin.ttf
            Roboto-ThinItalic.ttf
            slate-colors.css
            SourceCodePro-Regular.ttf

```

---

> 🎯React Press ©2021 Created by baiziyu-fe