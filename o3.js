/*3. Crie um objeto aluno com nome, notas (array) e um método calcularMedia().*/
const ALUNO = {
nome:"Esperança Munlela",
notas:[13,15,10,14],
calcularMedia(){
    let nota=0; 
    for (let i=0; i<ALUNO.notas.length;i++){nota+=ALUNO.notas[i]}
    return nota/4}
}


console.log(ALUNO.calcularMedia())