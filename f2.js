const factorial = (numero) =>{
    for (let i = numero - 1; i > 1; i--) {
      numero *= i;
    }
    return numero;
  };
  console.log(factorial(3));