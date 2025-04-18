//8. Converta um timestamp (milissegundos) para uma data legível.
const data = new Date();
const timestamp = data.getTime();
const data1 =new Date(timestamp)
const legivel = data1.toLocaleString();

console.log(legivel)

