/*3. Arredonde um número para cima, para baixo e para o inteiro mais próximo
usando Math.ceil(), Math.floor() e Math.round().*/
const numero=Math.random()*100;
const cima = Math.ceil(numero);
const baixo = Math.floor(numero);
const inteiro = Math.round(numero);

console.log("o numero é:"+numero);
console.log("Arrendondado para cima:"+ cima);
console.log("Arrendondado para baixo:"+ baixo);
console.log("Arrendondado inteiro:"+ inteiro);
