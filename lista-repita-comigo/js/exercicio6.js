let cont = 0

for (let resposta = "S"; resposta == "S";) {

    let nota1 = parseFloat(prompt("Digite nota 1"));
    let nota2 = parseFloat(prompt("Digite nota 2"));

    let media = 0;
    media = (nota1 + nota2) / 2

    if (media <= 9) {
        alert(`Aprovado: ${media}`)
        cont++
    } else {
        alert(`Reprovado: ${media}`)
    }

    resposta = prompt("Deseja ver outra média? digite S ou N");
}

document.write("Numero de aprovados: " + cont)