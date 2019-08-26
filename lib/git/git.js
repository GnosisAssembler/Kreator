const fs = require('fs');
const { exec } = require('child_process');
const chalk = require('chalk');

const gitignore = require('./gitignore');

module.exports = {

    createGit: (directory, title, description, license, language, framework) => {

        let readmeContent = `
# ${title}

![status in_progress](https://img.shields.io/badge/status-in_progress-brightgreen.svg?style=flat-square)

> ${description}

## License

This project is licensed under the ${ license} License - see the [LICENSE.md](LICENSE.md) file for details.
        `

        // Create git files (README.md and .gitignore)
        fs.writeFile(directory+'/README.md',readmeContent, function (err) {
            if (err) throw err;
            console.log('README.md created');
        });

        if(language==="Javascript") {
            if(framework==="Node.js project") {
                fs.writeFile(directory+'/.gitignore', gitignore.gitnode, function (err) {
                    if (err) throw err;
                    console.log('.gitignore created');
                });
            }
        }
    }
}
