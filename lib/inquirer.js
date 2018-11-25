const inquirer = require('inquirer');

const files = require('./files');

module.exports = {

  askWhatProject: () => {

    const questions = [

      {
        name: 'project',
        type: 'list',
        message: 'What language do you want to use',
        choices: [
          'Javascript', 'Nim', 'Rust', 'Python', 'Ruby', 'Elixir'
        ]
        
      }

    ];

    return inquirer.prompt(questions);

  },

};
