let nota = 0;
let soma = 0;
let cont = 0;

while(cont < 6){
  nota = parseFloat(prompt(`Informe a ${cont+1}° nota`));

  if(nota >=0 && nota <= 10){
    soma = soma + nota;
    cont++
  }else{
    alert("Valor fora do intervalo permitido");
  }

}

let media = soma/cont;

console.log(`Média das notas: ${media}`);
document.write(`Média das notas: ${media}`);