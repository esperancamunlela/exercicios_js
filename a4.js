/*4. Ordene um array de números em ordem crescente e decrescente usando .sort().*/
const ARRAY=[4,6,3,9,2,5,1,0];

const crescente = ARRAY.sort((a,b)=>a-b);
console.log(crescente);

const decrescente = ARRAY.sort((a,b)=>b-a);
console.log(decrescente);



