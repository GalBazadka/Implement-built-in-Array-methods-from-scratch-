Array.prototype.someFromScratch = function (callback) {
  console.log("My Custom some Function!");

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

const numbers = [5, 3, 5, 8, 5];
const result = numbers.someFromScratch(checkAdult);
console.log(result);

function checkAdult(age) {
  return age >= 18;
}
