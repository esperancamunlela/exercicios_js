//4. Adicione 7 dias à data actual.
const data = new Date();
data.setDate(data.getDate()+7)
console.log(`dia ${data.getDate()} mes ${data.getMonth()+1} ano ${data.getFullYear()}`)