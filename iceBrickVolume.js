/* Return volume of ice brick that a magician managed to put into a bottle.
Volume = Length x Width x Height */

iceBrickVolume = (radius, bottleLength, rimLength) => {
  let height = bottleLength - rimLength;
  let squareSide = Math.sqrt(2) * radius;
  let volume = Math.floor(squareSide ** 2 * height);
  return volume;
}

console.log(iceBrickVolume(1, 10, 2)); // => 16
console.log(iceBrickVolume(5, 30, 7)); // => 1150

