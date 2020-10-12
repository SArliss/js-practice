const PascalCase = (str) => {
  if (str.length === 0) {
    return str;
  }

  if (str.length === 1) {
    return str.toUpperCase();
  }

  let result = str.trim().toLowerCase().split(" ");

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].substr(1);;
  }
  return result.join('');
}

console.log(PascalCase("Test")); // ==> Test
console.log(PascalCase("Sinara arliss")); // ==> SinaraArliss
console.log(PascalCase(" camel case word")); // ==> CamelCaseWord
console.log(PascalCase("say hello ")); // ==> SayHello
console.log(PascalCase("H")); // ==> H
console.log(PascalCase("")); // ==> ""