calculateChange = (price, cash) => {
  let change = cash - price;
  console.log(change);
  let register = {};

  while (change > 0) {
    if (change >= 50) {
      register["half"] ? register["half"] += 1 : register["half"] = 1;
      change = change - 50;
    } else if (change >= 25) {
      register["quarter"] ? register["quarter"] += 1 : register["quarter"] = 1;
      change = change - 25;
    } else if (change >= 10) {
      register["dime"] ? register["dime"] += 1 : register["dime"] = 1;
      change = change - 10;
    } else if (change >= 5) {
      register["nickel"] ? register["nickel"] += 1 : register["nickel"] = 1;
      change = change - 5;
    } else if (change >= 1) {
      register["penny"] ? register["penny"] += 1 : register["penny"] = 1;
      change = change - 1;
    }
  }
  return register;
}

console.log(calculateChange(75, 200));
console.log(calculateChange(33, 100));
console.log(calculateChange(427, 847));