let numero = 30;
let output = "";

while (numero > 0) {
  if (numero % 4 === 0) {
    output += `[${numero}] `;
  } else {
    output += `${numero} `;
  }
  numero--;
}

output += "\nFim da contagem regressiva!";
console.log(output);
