const fs = require('fs');


module.exports = {

    createProjectFolder: (title) => {
        // Create project folder
        fs.mkdirSync('./'+title, function (err) {
            if (err) throw err;
            console.log('Project Folder Saved!');
        });
    }

}

