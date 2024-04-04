//   CALCULANDO O AUMENTO DO FUNCIONARIO CONFORME A QTD DE DEPENDENTES
// [1] = 5%
// [2,3] = 10%
// [> 4] = 15%



var nome = "Dinei";
let salario = 3100;
let dep = 2;

let nsal;

switch (dep) {
  case 0:
    nsal = salario;
    break;
  case 1:
    nsal = salario + (salario * 5/100);
    break;
  case 2:
  case 3:
    nsal = salario + (salario * 10/100);
    break;
  default:
    nsal = salario + (salario * 15/100);
}

console.log(`Novo salário de ${nome}: ${nsal}`);




