/*6. Converta um ângulo de graus para radianos e vice-versa usando Math.PI.*/
// x radianos é igual a graus * (pi/180)

let graus = 60;
const radianos = graus*(Math.PI/180);

console.log(radianos.toFixed(3))

graus = radianos*(180/Math.PI)
console.log(Math.round(graus))

