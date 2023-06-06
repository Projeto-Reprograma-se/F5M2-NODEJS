const prompt = require('prompt-sync')();
const fs = require('fs');
//Questão 1
//const date = new Date().getDay();

//var placa = prompt("Informe a placa do veículo (Padrão Mercosul ABC1D23): ");

//if(date == 1){
//  if(placa.endsWith('1') || placa.endsWith('2')){
//    console.log("Veículo não pode circular hoje.");
//  }else{
//    console.log("Veículo pode circular.");
//  }
//}else if(date == 2){
//  if(placa.endsWith('3') || placa.endsWith('4')){
//    console.log("Veículo não pode circular hoje.");
//  }else{
//    console.log("Veículo pode circular.");
//  }
//}else if(date == 3){
//  if(placa.endsWith('5') || placa.endsWith('6')){
//    console.log("Veículo não pode circular hoje.");
//  }else{
//    console.log("Veículo pode circular.");
//  }
//}else if(date == 4){
//  if(placa.endsWith('7') || placa.endsWith('8')){
//    console.log("Veículo não pode circular hoje.");
//  }else{
//    console.log("Veículo pode circular.");
//  }
//}else if(date == 5){
//  if(placa.endsWith('9') || placa.endsWith('0')){
//    console.log("Veículo não pode circular hoje.");
//  }else{
//    console.log("Veículo pode circular.");
//  }
//}
//###############################################################
//Questão 2
//const data = prompt("Digite uma data no formato (DD/MM/AAAA):");
//const [dia,mes,ano] = data.split('/');
//const convdata = new Date(ano,mes -1,dia);
//const meses = [
//  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
//  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
//];
//const dataFormatada = `${dia} de ${meses[mes-1]} de ${ano}`;  
//console.log(dataFormatada);
//###############################################################
//Questão 3
//const n1 = Number(prompt('Digite o primeiro número: '));
//const n2 = Number(prompt('Digite o primeiro número: '));
//const div = n1 / n2;
//try{
//  if(n2 == 0){
//    throw new Error('Erro, divisão por zero.');
//  }
//  var eq = `${n1} / ${n2} = ${div}`
//    console.log(eq);
//}catch(ocorrencia){
//  console.log(ocorrencia.message);
//}
//###############################################################
//Questão 4
//const data = fs.readFileSync('./arquivo.json');
//const arquivo = JSON.parse(data);
//console.log(arquivo);
//console.log(Array.isArray(arquivo));
