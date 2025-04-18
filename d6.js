//6. Verifique qual dia da semana caiu uma data específica.
const dataEspecifica = new Date(2001,8,27);
let dia= dataEspecifica.getDay();

switch (dia) {
  case 0: console.log(dataEspecifica.toLocaleDateString() + " calhou em um Domingo"); break;
  case 1: console.log(dataEspecifica.toLocaleDateString() + " calhou em uma Segunda-feira"); break;
  case 2: console.log(dataEspecifica.toLocaleDateString() + " calhou em uma Terça-feira"); break;
  case 3: console.log(dataEspecifica.toLocaleDateString() + " calhou em uma Quarta-feira"); break;
  case 4: console.log(dataEspecifica.toLocaleDateString() + " calhou em uma Quinta-feira"); break;
  case 5: console.log(dataEspecifica.toLocaleDateString() + " calhou em uma Sexta-feira"); break;
  case 6: console.log(dataEspecifica.toLocaleDateString() + " calhou em uma Sábado"); break;
}

console.log(dia)
