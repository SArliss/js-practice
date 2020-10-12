let result = "";

repeatingNumbers = (arr) => {
  for (j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j][1]; i++) {
      result += (arr[j][0]);
    }
    (j < arr.length - 1) && (result += ", ");
  }
  return result;
}

console.log(repeatingNumbers([[1, 2], [2, 3]]));