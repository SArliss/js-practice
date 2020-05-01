/* Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this: Sam Harris => S.H
*/

// Approach one
function abbrevName(name) {
  let nameArray = name.split(' ');
  let inicials = nameArray[0][0].toUpperCase() + "." + nameArray[1][0].toUpperCase();
  return inicials;
}

console.log(abbrevName("Sinara Arliss"));