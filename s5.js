//5. Inverta os caracteres de uma string usando .split(), .reverse() e .join().
const palavra = "Programar";
let reverter = palavra.split("");
 reverter = reverter.reverse();
 reverter = reverter.join(""); 
console.log(`A sua palavra invertida é ${reverter}`);
