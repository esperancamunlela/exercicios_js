let nome;
const palavras = function (nomes = []) {
  let maior = 0;
  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].length > maior) {
      maior = nomes[i].length;
      nome = nomes[i];
    }
  }
  return nome;
};

console.log(palavras(["Gabriel", "Esperança", "Maud", "Bento"]));