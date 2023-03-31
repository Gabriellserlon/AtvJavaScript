//Questão 1:
// function verificar(numero){
  //  if (numero <0){
    //    console.log("Digite um valor acima de 0");
    //}else if (numero %2 == 0){
//        console.log("O número é par");
//    }else{
//        console.log("O número é ímpar");
//    }
//}
//var numero = parseFloat(prompt("Digite um número: "));
// verificar(numero);

// Questão 2:
//numeros = []
//var contador
//while (contador != "NAO"){
//var numero = parseFloat(prompt("Digite um número: "));
//if (Number.isNaN(numero) == true){
//    console.log("Digite um valor válido");
//    break
//}else{
//    numeros.push(numero);
//}
//numeros.forEach(function(elemento){
//    elemento=elemento*2
//    console.log(elemento)
//})
//contador = prompt("Deseja inserir um novo número?").toUpperCase();
//}

// Questão 3:
numeros = []
var contador
while (contador != "NAO"){
var numero = parseFloat(prompt("Digite um número: "));
if (Number.isNaN(numero) == true){
    console.log("Digite um valor válido");
    break
}else{
    numeros.push(numero);
}
console.log("Números Inseridos:");
numeros.forEach(function(elemento){
    console.log(elemento)
})
var novosNumeros = numeros.map(function(elemento){
   return elemento*2
})
console.log("Números Multiplicados:");
novosNumeros.forEach(function(elemento){
    console.log(elemento);
})
contador = prompt("Deseja inserir um novo número?").toUpperCase();
}