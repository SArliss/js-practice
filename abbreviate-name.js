/* Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this: Sam Harris => S.H
*/

// Approach one
function abbrevName(name) {
  let nameArray = name.split(' ');
  let inicials = nameArray[0][0] + "." + nameArray[1][0];
  return inicials.toUpperCase();
}

// Approach two - this one is more complete and will take any numbers of names
function abbrevNames(name){
  let nameArray = name.split(' ');
  let inicials = "";
  for (let i = 0; i < nameArray.length; i++) {
    // this ensures the function will put the dot after the first name even if it's just one name
    if (i === 0) {
      inicials += nameArray[i][0] + ".";
    // this ensures the function will not put the dot after the last name 
    } else if (i === nameArray.length-1) {
      inicials += nameArray[i][0];
    // all other cases
    } else {
      inicials += nameArray[i][0] + ".";
    }
  }  
  return inicials.toUpperCase();
}

console.log(abbrevName("Sinara Arliss"));
console.log(abbrevNames("Sinara Martins Arliss"));