let loop = true;
let aprovados = 0;

while(loop){
    let n1 = parseInt(prompt("Informe a primeira nota "));
    let n2 = parseInt(prompt("Informe a segunda nota"));

    let media = (n1+n2)/2;

    if(media >= 9.5){
        aprovados++;
    }

    let resp = prompt("Deseja calcular a média de outro aluno? [Sim/Não]").toLowerCase();
    
    if( resp == "não"){
        loop = false;
    }
}

console.log(`Quantidade de alunos aprovados: ${aprovados}`);
document.write(`Quantidade de alunos aprovados: ${aprovados}`);