function main() {
let options = ["maçã", "laranja", "pera", "abacaxi", "manga"];
let choice = options[Math.floor(Math.random()*options.length)];
document.getElementById("output").innerHTML = choice
}