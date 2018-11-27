const fs = require('fs');


module.exports = {

    createNodePackageJson: (directory, name, desc, main, author, license) => {

        // Create package.json file
        fs.appendFile(directory+'/package.json', 
        `
{
    "name": "${name}",
    "version": "1.0.0",
    "description": "${desc}",
    "main": "${main}",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "${author}",
    "license": "${license}",
    "dependencies": {
    }
}
        `, function (err) {
            if (err) throw err;
            console.log('Package json created inside project directory');
        });

    },

    createMainJs: (directory, main) => {

        // Create main js file
        fs.appendFile(directory+'/'+main+'.js', 'Have a nice hacking with node', function (err) {
            if (err) throw err;
            console.log('Main js created inside project directory');
        });

    }

}
