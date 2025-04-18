//5. Subtraia 30 dias da data actual.
const data = new Date();
data.setDate(data.getDate()-30)
console.log(`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`)