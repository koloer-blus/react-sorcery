const fs = require("fs-extra")
const path = require('path');
const MarkdownIt = require('markdown-it');

const { Command, Option } = require('commander');
const { transformHTMLtoReactPage, registryComponentsText } = require("../util/transform")

const pkg = require('../package.json');

// define the global filePath
const MD_DOCS_PATH = path.resolve(__dirname, `../docs/`);
const PRESS_PAGE_PATH = path.resolve(__dirname, "../src/pages/");
const REACT_PAGE_FILE_TYPE = ".jsx";
const REGISTRY_COMPONENTS_FILE = path.resolve(__dirname, "../src/registry.jsx");
const ROUTER_CONFIG_FILE = path.resolve(__dirname, "../src/route.config.json");
const COMMAND_PATH = process.cwd();

// get the ReactPress info in package.json
const { version, name, repository, homepage } = pkg;

const program = new Command();
const mdInstance = new MarkdownIt();


const testMD = mdInstance.render("# hello world");

const reactTemplate = transformHTMLtoReactPage("测试文档", "TestMD", testMD);

fs.writeFile(`${PRESS_PAGE_PATH}/TestMD${REACT_PAGE_FILE_TYPE}`, reactTemplate).then(() => {
  console.log("complete write the file to aim files")
})

const registryFileData = registryComponentsText(["TestMD"]);

fs.writeFile(REGISTRY_COMPONENTS_FILE, registryFileData).then(() => {
  console.log("complete registry components")
})

fs.writeJson(ROUTER_CONFIG_FILE, {
  pages: [
    {
      path: "/",
      element: "TestMD"
    },
    {
      path: "/test",
      element: "TestMD"
    }
  ]
}).then(() => {
  console.log("complete router registry")
})

// >>> output version
program
  .version(
    version,
    '-v, -V, --version',
    `Output your local ${name}'s version.`
  );
