/*2. Adicione um método ao objeto carro que retorne uma string com suas
informações.*/
const CARRO ={
    marca:"Toyota",
    modelo:"vitz",
    ano:2020,
    informacoes(){return `O seu carro é ${CARRO.marca}, com o modelo ${CARRO.modelo} e é do ano ${CARRO.ano}`}
};

console.log(CARRO.informacoes())