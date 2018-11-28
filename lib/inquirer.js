const inquirer = require('inquirer');

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
        message: 'What language would you like to use:',
        choices: [
          'Javascript', 'Nim'
        ]
      }
    ];
    return inquirer.prompt(languageQuestions);
  },

  askWhatJsFramework: () => {
    const jsFrameworkQuestions = [
      {
        name: 'jsFramework',
        type: 'list',
        message: 'What javascript framework would you prefer:',
        choices: [
          'Node.js'
        ]
      }
    ];
    return inquirer.prompt(jsFrameworkQuestions);
  },

  askNodeJs: (name) => {
    const nodeJsQuestions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter name of project:',
        default: function() {
          return name;
        }
      },
      {
        name: 'desc',
        type: 'input',
        message: 'Enter description for your project:'
      },
      {
        name: 'main',
        type: 'input',
        message: 'Enter main file:',
        default: function() {
          return 'main.js';
        }
      },
      {
        name: 'author',
        type: 'input',
        message: 'Enter author:'
      },
      {
        name: 'license',
        type: 'input',
        message: 'Enter license:',
        default: function() {
          return 'ISC';
        }
      }
    ];
    return inquirer.prompt(nodeJsQuestions);
  },

}