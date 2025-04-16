// exercicio 6
const pares = (valores = []) => {
    
  for (let i = 0; i < valores.length; i++) {
    const filtro = valores.filter((valores) => valores[i] % 2 === 0); 
   
  }
  return filtro 
}
console.log(pares([1, 2, 3, 4, 5, 5, 7, 8, 9, 10, 11]));
