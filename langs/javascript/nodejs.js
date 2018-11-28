const fs = require('fs');

const { exec } = require('child_process');


module.exports = {

    createNodePackageJson: (directory, name, desc, main, author, license) => {

        let scriptData = {
            test: "echo \"Error: no test specified\" && exit 1"
        }
        let depsData = {}
        
        // Create package.json
        let data = {
            name: name,
            version: "1.0.0",
            description: desc,
            main: main,
            scripts: scriptData,
            author: author,
            license: license,
            dependencies: depsData
        }

        let packageJson = JSON.stringify(data, null, 2);  
        fs.writeFileSync(directory+'/package.json', packageJson); 
        console.log('Package.json created inside project directory');

    },

    createMainJs: (directory, main) => {

        // Check if main is empty and set a default main
        if (!main.length) {
            main = 'main.js';
        }

        // Create main js file
        fs.appendFile(directory+'/'+main, 'Have a nice hacking with node', function (err) {
            if (err) throw err;
            console.log('Main js created inside project directory');
        });

    },

    installDependencies: () => {

        exec('npm install', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }
        
            // the *entire* stdout and stderr (buffered)
            console.log(`STDOUT: ${stdout}`);
            console.log(`STDERR: ${stderr}`);
        });

    }

}
