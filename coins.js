/* Question 1 */

function locationCounter(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let selected = arr[i].split(',')[0];
    if (obj[selected]) {
      obj[selected] += 1;
    } else {
      obj[selected] = 1;
    }
  }
  return obj;
}

const arr = ["loc_a,234,234", "loc_b,234,234,234", "loc_a,234,234,234", "loc_ab,213"];
console.log(locationCounter(arr));

/* Question 2 */

function coins(n) {
  let obj = { 50: 0, 25: 0, 10: 0, 5: 0, 1: 0 };

  if (n === 0) {
    return n;
  } else if (n === 1) {
    return { 1: 1 };
  } else {

    while (n > 0) {
      if (n >= 50) {
        obj[50] += 1;
        n -= 50;
      } else if (n >= 25) {
        obj[25] += 1;
        n -= 25;
      } else if (n >= 10) {
        obj[10] += 1;
        n -= 10;
      } else if (n >= 5) {
        obj[5] += 1;
        n -= 5;
      } else if (n >= 1) {
        obj[1] += 1;
        n -= 1;
      }
    }
  }

  return obj;
}

const n = 33;
console.log(coins(n)); 