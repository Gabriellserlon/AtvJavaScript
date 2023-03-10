var alturas = [];
var alturasHomem = [];
var num_mulheres = 0;
for(var i=0;i<=5;i++){
    var altura = parseFloat(prompt("Digite a altura da pessoa ",i+1));
    var sexo = prompt("Digite o sexo da pessoa",i+1);
    sexo.toUpperCase();
    alturasHomem+=i;
    if(sexo=="M"){
        alturasHomem.push(altura);
    }else{
        num_mulheres+=1;
    }
    alturas.push(altura);
}
var maiorAltura = Math.max(alturas);
var menorAltura = Math.min(alturas);
var media = (alturasHomem)/5;
console.log("A maior altura é: "+maiorAltura);
console.log("A menor altura é: "+menorAltura);
console.log("A média das alturas dos homens é: "+media);
console.log("O número de mulheres é: "+num_mulheres);

