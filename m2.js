/*2. Encontre o maior e o menor número dentro de um array usando Math.max() e
Math.min().*/
const array = [9,3,6,2,6,5,4,7,5]
const maior = Math.max(...array);
const menor = Math.min(...array);

console.log(`O maior número é ${maior} e o menor número é ${menor}`)