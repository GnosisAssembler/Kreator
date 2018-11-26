const inquirer = require('inquirer');

const node_lang = require('../languages/javascript/node_lang');

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
          'Javascript', 'Nim (not ready)'
        ]
      }

    // Js prompt
    const jsPrompt = 
      {
        name: 'js',
        type: 'list',
        message: 'What Javascript framework you want to use',
        choices: [
          'Node', 'React (not ready)'
        ]
      }

    // Js-Node Prompt
    const jsNodePrompt = 
      {
        name: 'jsNode',
        type: 'input',
        message: 'Name of package json'
      }

      // Main function
      function main() {
        whatFramework();
      }

      // Framework function
      function whatFramework() {
        inquirer.prompt(languagePrompt).then(answers => {
          if (answers.language === 'Javascript') {
            jsAnswer(); // ask what js framework
          } else if (answers.language === 'Nim') {
            console.log('Your Language is Nim');
          }
        });
      }

      // Js answer
      function jsAnswer() {
        inquirer.prompt(jsPrompt).then(answers => {
          if (answers.js === 'Node') {

            inquirer.prompt(jsNodePrompt);
            node_lang.createNodeProject();

          } else if (answers.js === 'React') {
            console.log('You selected React');
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
