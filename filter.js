Array.prototype.filterFromScratch = function(callback) {
    console.log('My Custom Filter Function!');

    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const numbers = [30, 4, 9, 16, 25, 18];
const newArr = numbers.filterFromScratch(checkAdult);
console.log(newArr);

function checkAdult(age) {
    return age >= 18;
  }