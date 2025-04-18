/*7. Utilize JSON.stringify() e JSON.parse() para converter um objeto em string e viceversa.*/
const data={
    name:"Esperança",
    age: 24,
    status:"Estudante"
}

const convertToJSON= JSON.stringify(data);
console.log(convertToJSON);

const convertToString=JSON.parse(convertToJSON)
console.log(convertToString)