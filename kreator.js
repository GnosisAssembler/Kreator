#!/usr/bin/env node

// npm install symlink 
// npm link
//--------------------------------------------

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const project = require('./lib/project');

const nodejs = require('./langs/javascript/nodejs');
const git = require('./lib/git');

// ASCII title
clear();
console.log(
    chalk.yellow(
        figlet.textSync('Kreator', { horizontalLayout: 'full' })
    )
);

// Check if the directory is already a node project
if (files.fileExists('package.json')) {
    console.log(chalk.red('Already a node project!'));
    process.exit();
}

// Run main
const run = async () => {
    const projectQuestions = await inquirer.askWhatProject();
    // Create project folder
    project.createProjectFolder(projectQuestions.title);

    const languageQuestions = await inquirer.askWhatLanguage();
    // Create lang specific dependencies
    if (languageQuestions.language === 'Javascript') {
        const jsFrameworkQuestions = await inquirer.askWhatJsFramework();

        // Create js specific dependencies
        if (jsFrameworkQuestions.jsFramework === 'Node.js') {
            const nodeJsQuestions = await inquirer.askNodeJs(projectQuestions.title);
            // Create package.json file
            nodejs.createNodePackageJson(
                projectQuestions.title,
                nodeJsQuestions.name,
                nodeJsQuestions.desc,
                nodeJsQuestions.main,
                nodeJsQuestions.author,
                nodeJsQuestions.license
                );

            // Create main js file
            nodejs.createMainJs(
                projectQuestions.title,
                nodeJsQuestions.main);

            // Create git files
            git.createGit(projectQuestions.title, nodeJsQuestions.name);

        }
    }
    
}

run();