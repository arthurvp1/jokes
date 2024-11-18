const inquirer = require('inquirer')
const chalk = require("chalk"); 



inquirer
    .prompt([
        {name: 'nome', message: 'digite o seu nome'},
        {name: 'idade', message: 'digite a sua idade'},
    ])

    .then((answers) => {
        // const soma = parseFloat(answers.n1) + parseFloat(answers.n2)+ parseFloat(answers.n3)
        // const media = soma/3    
    
        console.log(chalk.bgYellow.black(`Nome: ${answers.nome}`));
        console.log(chalk.bgYellow.black(`Idade: ${answers.idade} anos`));
    })
