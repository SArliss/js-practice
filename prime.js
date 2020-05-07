/* Define a function that takes an integer argument and returns 
logical value true or false depending on if the integer is a prime. */

const isPrime = num => {
  for(let i = 2; i <= Math.sqrt(num); i++)
      if(num % i === 0) return false; 
  return num > 1;
}

console.log(isPrime(73));