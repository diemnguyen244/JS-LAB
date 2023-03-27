function findSecret(code) {
  // your code here
  if (code === "") return "";
  //   let newCode = code.split("");
  //   console.log(newCode);
  //   console.log(newCode.length);
  let text = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === code[i].toLowerCase()) {
      //   console.log(code[i]);
      text += code[i];
    }
  }

  return text;
}

console.log(findSecret("SUPERCODE"));
//--> ''

console.log(findSecret("SUPERhelloCODE"));
//--> 'hello'

console.log(findSecret("eaABFHsyUEYSJfrontJSKJSHend"));
// --> 'easyfrontend'
