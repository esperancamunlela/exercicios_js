function somaDeArray(numeros = []) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    return soma;
  }
  console.log(somaDeArray([9, 5, 7,9,3]));