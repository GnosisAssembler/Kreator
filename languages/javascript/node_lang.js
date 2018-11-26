const fs = require('fs');

module.exports = {

    createNodeProject: () => {
        // Create package.json
        fs.appendFile('package.json', 
`{
    "name": "Name of package",
    "version": "1.0.0",
    "description": "some text here",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "www.test.gr"
    },
    "keywords": [
        "npm",
        "git"
    ],
    "author": "Pan",
    "license": "MIT"
}`, 
        function (err) {
            if (err) throw err;
            console.log('Package.json created');
        })
    }
};
