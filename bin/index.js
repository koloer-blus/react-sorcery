#!/usr/bin/env node

const fs = require("fs-extra");
const path = require('path');
const {
    Command,
    Option
} = require('commander');
const pkg = require('../package.json');
// program commands
const COMMAND_PATH = process.cwd();

// get the ReactPress info in package.json
const {
    version,
    name,
} = pkg;

const program = new Command();

const isExistPath = (pathStr) => fs.existsSync(pathStr);
const showError = (errorMsg, desc = '') => console.log('\x1B[31m%s\x1B[0m \x1B[3m\x1B[35m%s\x1B[0m', `「${errorMsg}」`, `${desc}`);

const pathHandler = (dirPath, handlerCallback) => {
    const pathStr = path.join(COMMAND_PATH, dirPath);
    try {
        if (fs.lstatSync(pathStr).isFile()) {
            showError('Access type cannot be separate file', pathStr);
        } else if (isExistPath(pathStr)) {
            (typeof handlerCallback === 'function') && handlerCallback(pathStr);
        } else {
            showError('The accessed path does not exist', pathStr);
        }
    } catch {
        showError('The provided directory does not exist', pathStr)
    }
}


// >>> output version
program
    .version(version, '-v, --version', `Output your local ${name}'s version.`);

// >>> use command init
program
    .name('react-sorcery')
    .usage('<commands> [options]')
    .command('init [fileDirName]')
    .description('Used to create a new MardDown website application.')
    .action((fileDirName = 'md-pages') => {
        pathHandler(fileDirName);
    });

// >>> use command generate development preview page

program
    .name('react-socery')
    .usage('<commands> <options>')
    .command('watch <fileDirName>')
    .description('Used to start the MarkDown web application in development mode.')
    .action((fileDirName = 'md-pages') => {
        pathHandler(fileDirName);
    });

// >>> use command build pages
program
    .name('react-socery')
    .usage('<commands> <options>')
    .command('preview <fileDirName>')
    .description('Used to start the MarkDown web application in product mode.')
    .action((fileDirName = 'md-pages') => {
        pathHandler(fileDirName);
    });


program.parse(program.argv);




const opts = program.opts();