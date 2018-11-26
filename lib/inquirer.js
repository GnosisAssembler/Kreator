const inquirer = require('inquirer');

const files = require('./files');

module.exports = {

  askWhatProject: () => {
    const projectQuestions = [
      {
        name: 'title',
        type: 'input',
        message: 'Enter title for your project:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter title for your project:';
          }
        }
      }
    ];
    return inquirer.prompt(projectQuestions);
  },

  askWhatLanguage: () => {
    const languageQuestions = [
      {
        name: 'language',
        type: 'list',
        message: 'What language would you like:',
        choices: [
          'Javascript', 'Nim'
        ]
      }
    ];
    return inquirer.prompt(languageQuestions);
  }




}