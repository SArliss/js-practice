/* create a function that will return true if the walk the app gives you will take you exactly ten minutes 
* (you don't want to be early or late!) and will, of course, return you to your starting point. 
* Return false otherwise. Every south, north, west and east blocks have a cross duration of 1 min. 
*/

const isValidWalk = (walk) => {

  if (walk.length !== 10) {
    return false;
  }

  let vertical = 0;
  let horizontal = 0;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        vertical++;
        break;
      case "s":
        vertical--;
        break;
      case "e":
        horizontal++;
        break;
      case "w":
        horizontal--;
        break;
    }
  }

  if (vertical === 0 && horizontal === 0) {
    return true
  } else {
    return false
  }

}

console.log(isValidWalk(['n', 's', 'n', 's', 'w'])); // false
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])); // false
console.log(isValidWalk(['w'])); // false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // false