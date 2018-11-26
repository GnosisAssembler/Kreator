const inquirer = require('inquirer');

const files = require('./files');

module.exports = {

  // Exports the Project questions
  askWhatProject: () => {

    // Language prompt
    const languagePrompt = 
      {
        name: 'language',
        type: 'list',
        message: 'What language do you want to use',
        choices: [
          'Javascript', 'Nim'
        ]
      }

    // Js prompt
    const jsPrompt = 
      {
        name: 'js',
        type: 'list',
        message: 'What Javascript framework you want to use',
        choices: [
          'React', 'Node'
        ]
      }

      // Main function
      function main() {
        whatFramework();
      }

      // Framework function
      function whatFramework() {
        inquirer.prompt(languagePrompt).then(answers => {
          if (answers.language === 'Javascript') {
            jsAnswer();
          } else if (answers.language === 'Nim') {
            console.log('Your Language is Nim');
          }
        });
      }

      // Js answer
      function jsAnswer() {
        inquirer.prompt(jsPrompt).then(answers => {
          if (answers.js === 'React') {
            console.log('You selected React');
          } else if (answers.js === 'Node') {
            console.log('You selected Node');
          }
        });
      }

      // Nim answer
      function nimAnswer() {

      }

      // Call main
      main();







  }

};
