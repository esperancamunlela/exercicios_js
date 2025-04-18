//9. Formate uma data usando toLocaleDateString() e toLocaleTimeString().
const data = new Date();
const dia = data.toLocaleDateString();
const hora = data.toLocaleTimeString();
console.log(dia +" "+ hora)