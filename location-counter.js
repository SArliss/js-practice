function locationCounter(arr) {
  let obj = {};
  let splitArr = [];

  for (let i = 0; i < arr.length; i++) {
    splitArr = splitArr.concat(arr[i].split(' '));
  }

  for (let i = 0; i < splitArr.length; i++) {
    let selected = splitArr[i].split(',')[0];

    if (!obj[selected]) {
      obj[selected] = 1;
    } else {
      obj[selected] += 1;
    }
  }

  return obj;

}

const arr = ["loc_a,234,234 loc_b,234", "loc_b,234,234,234 loc_d,234", "loc_a,234,234,234"];
console.log(locationCounter(arr));