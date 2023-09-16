let tabuada = parseInt(prompt("Informe uma tabuada"));
console.log(`Valor informado pelo usuário: ${tabuada}`);

for(let i = 0; i <= 10; i++){
    let resultado = tabuada * i;
    console.log(resultado);
    document.write(`${tabuada} x ${i} = ${resultado} <br>`);
} 