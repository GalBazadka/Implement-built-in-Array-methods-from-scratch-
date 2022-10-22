Array.prototype.everyFromScratch = function (callback) {
  console.log("My Custom every Function!");

  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

const numbers = [20, 34, 3, 25, 20];
const result = numbers.everyFromScratch(checkAdult);
console.log(result);

function checkAdult(age) {
  return age >= 18;
}
