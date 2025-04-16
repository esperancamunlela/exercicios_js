let divisores = 0;
function primo(valor){
  for (let i = 0; i <= valor; i++){
    if (valor%i===0){divisores++;}
  }
  if (divisores===2){return true}
  else{return false}
}
console.log(primo(7))