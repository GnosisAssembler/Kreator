const fs = require('fs');
const { exec } = require('child_process');
const chalk = require('chalk');


module.exports = {

    createNodePackageJson: (directory, name, desc, main, author, license) => {

        let scriptData = {
            "start": `node ${main}`,
            "server": `nodemon ${main}`,
        }
        let depsData = {
            "body-parser": "^1.18.2",
            "express": "^4.16.3"
        }
        let devDepsData = {
            "nodemon": "^1.18.4"
        }
        
        // Create package.json
        let data = {
            name: name,
            version: "1.0.0",
            description: desc,
            main: main,
            scripts: scriptData,
            author: author,
            license: license,
            dependencies: depsData,
            devDependencies: devDepsData
        }

        let packageJson = JSON.stringify(data, null, 2);  
        fs.writeFileSync(directory+'/package.json', packageJson); 
        console.log(chalk.green('*' + ' Package.json created inside project directory'));

    },

    createMainJs: (directory, main) => {

        // Check if main is empty and set a default main
        if (!main.length) {
            main = 'main.js';
        }

        let mainContent = `
const express = require('express');
const bodyParser = require('body-parser');

// Bring in routes
const someRoutes = require('./routes/api/someRoutes');

// Init app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use('/api/someRoutes', someRoutes);

// Configure port
const port = process.env.PORT || 5000;

// Start express server
function startExpress() {
  app.listen(port);
  console.log('Express server listening on port '+ port);
}

startExpress();
        `

        // Create main js file
        fs.appendFile(directory+'/'+main, mainContent, function (err) {
            if (err) throw err;
            console.log(chalk.green('*' + ' Main js created inside project directory'));
        });

    },

    createApi: () => {
        var api = './test/api';

        if (!fs.existsSync(api)){
            fs.mkdirSync(api);
        }
    },

    createRoutes: () => {
        var routes = './test/api/routes';

        if (!fs.existsSync(routes)){
            fs.mkdirSync(routes);
        }
    },

    //! TO BE FIXED
    createRouteFile: (directory) => {

        let routeContent = `
const express = require('express');
const router = express.Router();

// @route   GET api/someRoutes/test
// @desc    Test route
// @access  Public
router.get('/test', (req, res) => 
    res.json({ msg: 'Test Works' }
));

module.exports = router;
        `
        let routeName = 'someRoutes.js'.

         // Create route file
         fs.appendFile(directory+'/api/routes/'+ routeName , routeContent, function (err) {
            if (err) throw err;
            console.log(chalk.green('*' + ' Route created inside api/routes'));
        });

    },

    //! -------- UNUSED ----------
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
