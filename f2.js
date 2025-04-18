//2. Crie uma arrow function que receba um número e retorne seu fatorial
const factorial = (numero) =>{
    for (let i = numero - 1; i > 1; i--) {
      numero *= i;
    }
    return numero;
  };
  console.log(factorial(3));