
let dentro = 0;
let fora = 0;

for (let i = 1; i <= 10; i++) {
    let valor = parseInt(prompt(`digite o ${i} valor"`));

    if (valor >= 24 && valor <= 42) {
        dentro++;
    } else {
        fora++;
    }
}

document.write(`Valores dentro do intervalo: ${dentro} <br>`);
document.write(`Valores fora do intervalo: ${fora}`);