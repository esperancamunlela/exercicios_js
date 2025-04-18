/*7. Crie um array de objectos e use .every() para verificar se todos atendem a uma
condição.*/
const aleatorio=[
    {
      palavra:"Algemas",
      numeroDeLetras:7 
    },
    {
        palavra:"Acariciar",
        numeroDeLetras:9
      },
      {
        palavra:"Anedotas",
        numeroDeLetras:8
      },
      {
        palavra:"Adorar",
        numeroDeLetras:6
      },
      {
        palavra:"Amar",
        numeroDeLetras:4  
      }
]

const letras=aleatorio.every(numero=>numero.numeroDeLetras>=5);

console.log(letras)


