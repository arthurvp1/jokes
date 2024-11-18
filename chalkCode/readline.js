const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout,
    // comunicação enquanto ele estiver rodando
});

var linguagem = readline.question('Qual a sua linguagem preferida? ', (language) => {
    readline.close();
});

if(linguagem === 'java'){
    console.log('Você escolheu a linguagem Java!');
}
else if(linguagem === 'python'){
    console.log('Você escolheu a linguagem python!');
}

    