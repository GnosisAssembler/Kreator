const fs = require('fs');
const { exec } = require('child_process');
const chalk = require('chalk');


module.exports = {

    createGit: (directory, title) => {

        // Create git files (README.md and .gitignore)
        fs.writeFile(directory+'/README.md', `# ${title}`, function (err) {
            if (err) throw err;
            console.log('Git created');
        });
        fs.writeFile(directory+'/.gitignore', '', function (err) {
            if (err) throw err;
            console.log('Git created');
        });

    }
}
