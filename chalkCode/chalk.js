const chalk = require("chalk"); 

const nota = 8;

if (nota >= 7) {
    console.log(chalk.green.bold('Parabéns! Você passou de ano.'));
}
else {
    console.log(chalk.bgRed.black('Você não passou de ano.'));
}
