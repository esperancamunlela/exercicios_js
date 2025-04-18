//7. Calcule a diferença em dias entre duas datas.
const data1=new Date(2023,9,13);
const hoje=new Date(2025,4,18);
const direfencaData=hoje-data1;
const dias=direfencaData/1000*60*60*24;

console.log(`A diferença é de ${dias} dias`)