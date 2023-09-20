let dentro_intervalo = 0;
let fora_intervalo = 0;


for(let i = 1; i <= 10; i++){
    let num = parseInt(prompt("Informe um valor"));

    num >= 24 && num <= 42? dentro_intervalo++ : fora_intervalo++;
}

document.write(`Dentro do intervalo: ${dentro_intervalo}`);
document.write(`Fora do intervalo: ${fora_intervalo}`);