/*6. Crie um array de objectos e use .some() para verificar se algum deles atende a uma
condição.*/
const ARRAY_DE_OBJECTOS=[
    {
        marca:"Samsung",
        referencia:"A04"
    },
    {
        marca: 'IPhone',
        referencia:"15 pro max"
    },
    {
        marca:"Samsung",
        referencia: "A06"
    },
    {
        marca:"Iphone",
        referencia:"X"
    }
]

const condicao = ARRAY_DE_OBJECTOS.some(cond=>cond.marca==="Samsung");  

console.log(condicao)