let cont = 0;
let soma = 0;

for(let valor = 15; valor <= 100; valor++){
    cont = cont + 1;
    soma = soma + valor;
}

let resultado = soma/cont;

document.write(`Resultado: ${resultado}`)
console.log(resultado);