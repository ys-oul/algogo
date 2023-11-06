const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
  rl.close();
});
rl.on("close", function () {
  str = atoA(input[0]);
  console.log(str);
});

function atoA(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if ("a" <= str[i] && str[i] <= "z") output = output + str[i].toUpperCase();
    else output = output + str[i].toLowerCase();
  }
  return output;
}
