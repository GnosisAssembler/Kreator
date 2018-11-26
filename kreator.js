#!/usr/bin/env node

// npm install symlink 
// npm link
//--------------------------------------------

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

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

inquirer.askWhatProject();
