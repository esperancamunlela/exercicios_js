/*8. Escreva uma função que recebe um array de objetos { nome, idade } e retorne o
objeto com maior idade.*/

const maiorIdade=function (array){
    let maior = array[0];
    let person;
    for (let i=0;i<array.length;i++){
        if(array[i].age>maior.age){
            maior=array[i].age
            person= array[i]
        }
    }
return person
}

const array=[
    {
        name:"Esperança",
        age:24
    },
    {
        name:"Evelyn",
        age:1
    },
    {
        name:"Lúcia",
        age:61
    }
]
console.log(maiorIdade(array))