Array.prototype.findFromScratch = function (callback) {
  console.log("My Custom find Function!");

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
  return undefined;
};

const numbers = [16, 4, 9, 20, 50, 10];
const value = numbers.findFromScratch(checkAdult);
console.log(value);

function checkAdult(age) {
  return age >= 18;
}
