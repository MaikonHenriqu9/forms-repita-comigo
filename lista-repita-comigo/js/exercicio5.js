let n1 = parseInt(prompt("Informe o primeiro valor"));
let n2 = parseInt(prompt("Informe o segundo valor"));

var cont = 0;
var soma = 0;
var media = 0;

for(let i = n1; i <= n2; i++){
    soma = soma + i;
    cont = cont + 1;
}

media = soma/cont;

document.write(`Resultado: ${media}`);