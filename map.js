const myCustomMapFunction = function(callback) {
    console.log('My Custom Map Function!');

    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray[i] = callback(this[i], i);
    }
    return newArray;
}

Array.prototype.mapFromScratch = myCustomMapFunction;

const numbers = [4, 9, 16, 25];
const newArr = numbers.mapFromScratch(addOneFunction);
console.log(newArr);

function addOneFunction(num) {
    return num+1;
  }