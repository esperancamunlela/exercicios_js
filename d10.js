//10.Crie uma função que retorna quantos dias faltam para o final do ano.
function finalDoAno(){
const hoje=new Date();
const fimDeAno=new Date(2025,11,31);
const diferencaDeDias=fimDeAno-hoje;
const dias=diferencaDeDias/1000*60*60*24; 
return dias
}


console.log(finalDoAno())