const fs = require('fs');
const path = require('path');

// Get the current directory
module.exports = {
    getCurrentDirectoryBase : () => {
        return path.basename(process.cwd());
    },

    // Return a "isFile" function
    fileExists : (filePath) => {
        try {
            return fs.statSync(filePath).isFile();
        } catch (err) {
            return false;
        }
    }
};