let n1 = parseInt(prompt("Informe o primeiro valor"));

for(let i = 1; i <=2; i++){
    let n2 = parseInt(prompt("Informe o segundo valor"));

    if(n2 <= 0){
        alert("Valor inválido");
        alert(`${i}° tentativa`);

        if(i >=2){
            alert("Quantidade de tentativas ultrapassadas");
        }

    }else{
        let resultado = n1/n2;
        document.write(`Resultado: ${resultado}`);
        break;
    }

}