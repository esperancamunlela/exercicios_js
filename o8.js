/*8. Crie uma função que mescle dois objetos e retorne um novo objeto com todas
as propriedades*/ 

const Object1={
    planeta:"Terra",
    Continente:"África"
};

const object2={
    pais:"Moçambique",
    capital:"Maputo" 
};

function uniao(item1,item2){
return {...item1 ,...item2};
}

console.log(uniao(Object1,object2))