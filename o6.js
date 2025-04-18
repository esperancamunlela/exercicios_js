/*6. Crie um objeto com métodos internos que manipulem suas propriedades.*/
const INFORMACOES={
    nome:"Esperança",
    sobreNome:"Munlela",
    idade: 24,
    profissao:"Estudante",

    nomeCompleto(){return `O nome completo é ${INFORMACOES.nome} ${INFORMACOES.sobreNome}.`},
    anoDeNascimento(){return "O seu ano de Nascimento é: "+ (2025-INFORMACOES.idade)},
    informacao(){return `É uma ${INFORMACOES.profissao} de ${INFORMACOES.idade} anos.`}

}

console.log(INFORMACOES.nomeCompleto())
console.log(INFORMACOES.anoDeNascimento())
console.log(INFORMACOES.informacao())