const myCustomReduceFunction = function(callback) {
    console.log('My Custom Filter Function!');
    let result = this[0];
    for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i]);
        }
    return result;
    }
    
Array.prototype.reduceFromScratch = myCustomReduceFunction;

const numbers = [180,50,20];
const result = numbers.reduceFromScratch(SubtractAll);
console.log(result);

function SubtractAll(total, num) {
    return total - num;
  }