let n1 = parseInt(prompt("Informe o primeiro valor"));
let n2 = parseInt(prompt("Informe o segundo valor"));

/* Verifico se o primeiro é maior que o segundo;caso seja, ele irá pedir para informar um valor menor */
if (n1 > n2) {
    var cont = true;

    while (cont) {
        alert(`${n1} é maior que ${n2}`);
        alert(`Por favor, insira um valor menor que ${n2}`);

        n1 = parseInt(prompt(`Informe um valor que seja menor que ${n2}`));

        if (n1 < n2) {
            cont = false;
        }
    }
} 

/* Verifico se os dois valores são iguais; caso seja, ele irá pedir para informar um valor menor */
    if (n1 == n2) { 
    
    var cont = true;

    while (cont) {
        alert(`${n1} é igual a ${n2}`);
        alert(`Por favor, insira um valor menor que ${n2}`);

        n1 = parseInt(prompt(`Informe um valor que seja menor que ${n2}`));

        if (n1 < n2) {
            cont = false;
        }
    }
} 

alert("Validação deu certo");

var cont = 0;
var soma = 0;

console.log(cont);
console.log(soma);

/*
for(cont; n1 < n2; cont++){
    console.log(cont);
}

console.log(`Quantidade de numéro entre ${n1} e ${n2}: ${cont}`);
*/