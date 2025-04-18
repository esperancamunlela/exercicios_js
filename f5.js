/*5-Implemente uma função que recebe um número e retorna uma função que
adiciona esse número a outro número passado posteriormente.*/
function adicionarNumero(numero1){
    return function(numero2){
        let soma=numero1+numero2
    }
}
