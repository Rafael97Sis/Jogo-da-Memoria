function verificaPalindromo(string) {
  if (!string) return

  return string.split("").reverse().join("") === string;

}

let myVar = null;

//console.log(verificaPalindromo("ama"))

function verificaPalindromo_01(string) {
  if (!string) return "String Inexistente"

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindromo_01())