Array.prototype.findIndexFromScratch = function (callback) {
  console.log("My Custom findIndex Function!");

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return i;
    }
  }
  return undefined;
};

const numbers = [16, 4, 9, 20, 50, 10];
const value = numbers.findIndexFromScratch(checkAdult);
console.log(value);

function checkAdult(age) {
  return age >= 18;
}
