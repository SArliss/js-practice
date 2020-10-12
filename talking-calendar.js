talkingCalendar = (date) => {
  let splitDate = date.split('/');
  let result = "";
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // month
  result = months[splitDate[1] - 1] + " ";

  // day
  let day = parseInt(splitDate[2]);
  switch (day) {
    case 1:
    case 21:
    case 31:
      result += day + "st, ";
      break;
    case 2:
    case 22:
      result += day + "nd, ";
      break;
    case 3:
    case 23:
      result += day + "rd, ";
      break;
    default:
      result += day + "th, ";
  }

  // year
  result += splitDate[0] + ".";

  return result;
}

console.log(talkingCalendar("2017/12/02")); // => December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // => November 11th, 207
console.log(talkingCalendar("1987/08/24")); // => August 24th, 1987
