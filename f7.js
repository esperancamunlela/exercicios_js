/*7. Crie uma função que recebe um nome e um sobrenome e retorna um objeto {
    nome, sobrenome, nomeCompleto }.*/
   function nomeCompleto(name,surname){
    const JUNCAO = {
        nome:name,
        sobrenome:surname,
        nomeCompleto:name+" "+surname
    }
return JUNCAO
   } 

   console.log(nomeCompleto("Esperanca","Munlela"))