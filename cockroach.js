/* The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and 
returns it in cm per second, rounded down to the integer */

cockroachSpeed = (speed) => Math.floor(speed * 27.7778);

console.log(cockroachSpeed(1.08));