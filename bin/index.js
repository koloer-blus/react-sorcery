const fs = require("fs-extra")
const path = require('path');;

const { Command, Option } = require('commander');
const { registryComponentsText } = require("../util/transform")

const pkg = require('../package.json');

// define the global filePath
const MD_DOCS_PATH = path.resolve(__dirname, "../docs/");
const PRESS_MD_JSON_PATH = path.resolve(__dirname, "../src/md/");
const MD_JSON_FILE_TYPE = ".md.json";
const REGISTRY_COMPONENTS_FILE = path.resolve(__dirname, "../src/registry.jsx");
const ROUTER_CONFIG_FILE = path.resolve(__dirname, "../src/route.config.json");
const COMMAND_PATH = process.cwd();

// get the ReactPress info in package.json
const { version, name, repository, homepage } = pkg;



const program = new Command();

function clearTheBuildPath() {
  fs.removeSync(PRESS_MD_JSON_PATH);
  fs.removeSync(REGISTRY_COMPONENTS_FILE)
  fs.removeSync(ROUTER_CONFIG_FILE)
  fs.mkdirSync(PRESS_MD_JSON_PATH);
}
clearTheBuildPath();

// Global Variable Path
const docs_path = [];
let count = 1;

function getDocsFilesList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getDocsFilesList(fullPath, filesList);
    } else {

      const isMD = item.slice(item.lastIndexOf(".") + 1).toLowerCase() === "md";
      if (isMD) {

        filesList.push({
          path: fullPath,
          title: item.slice(0, item.lastIndexOf(".")),
          name: `DOC_MD__${count}`,
          route: `/doc__${count}`
        });
        count++;
      }
    }
  });
  return filesList;
}

getDocsFilesList(MD_DOCS_PATH, docs_path);


/**
 * 通过filePath读取对应的docs
 * @param {{path: string; title: string; name: string; route:string;}[]} filesList 
 */
function transformMDtoJSON(filesList) {
  filesList.forEach((file) => {
    fs.readFile(file.path, 'utf-8')
      .then((data) => {
        const fileName = file.name + MD_JSON_FILE_TYPE;

        fs.writeJSON(`${PRESS_MD_JSON_PATH}/${fileName}`, {
          content: data
        }, { flag: "w+" })
          .then(() => {
            console.log(`[✅ ${Date.now()}] Successfully created ${fileName}.`)
          })
          .catch((err) => {
            console.log(`Failed to create ${fileName} file ❌.`)
            console.error(err);
          })

      }).catch(err => {
        console.log(`Failed to read ${file.path} ❌.`)
        console.error(err);
      })
  })
}

transformMDtoJSON(docs_path);


const pageNamesList = docs_path.map(doc => ({
  name: doc.name,
  file: doc.name + MD_JSON_FILE_TYPE
}));

const registryFileData = registryComponentsText(pageNamesList);

fs.writeFile(REGISTRY_COMPONENTS_FILE, registryFileData, { flag: "w+" }).then(() => {
  console.log("✅complete registry components")
})

fs.writeJson(ROUTER_CONFIG_FILE, {
  pages: docs_path.map(doc => ({
    md_key: doc.name,
    path: doc.route
  }))
}, { flag: "w+" }).then(() => {
  console.log("✅Complete router registry")
}).catch(err => {
  console.log(`Failed to create route file`);
  console.error(err);
})

// >>> output version
program
  .version(
    version,
    '-v, -V, --version',
    `Output your local ${name}'s version.`
  );
