// 6. Criar uma função que filtre números pares de um array.
const pares = (valores = []) => { 
    const FILTRO = valores.filter(valor => valor % 2 === 0);  
  return FILTRO 
}
console.log(pares([1, 2, 3, 4, 5, 5, 7, 8, 9, 10]));
