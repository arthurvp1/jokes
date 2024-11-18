const inquirer = require('inquirer')
const chalk = require("chalk"); 

inquirer
    .prompt([
        {name: 'n1', message: 'digite a primeira nota'},
        {name: 'n2', message: 'digite a segunda nota'},
        {name: 'n3', message: 'digite a terceira nota'}

    ])
    .then((answers) => {
        const soma = parseFloat(answers.n1) + parseFloat(answers.n2)+ parseFloat(answers.n3)
        const media = soma/3

        if(media>=7){
            console.log(chalk.green(`A media das notas é ${media}`))
        }
        else{
            console.log(chalk.red(`A media das notas é ${media}`))
        }
    })