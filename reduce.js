Array.prototype.reduceFromScratch = function (callback, initalValue) {
    console.log("My Custom Filter Function!");
    let result = this[0];
    let i = 1;
  
    if (initalValue !== undefined) {
      output = initalValue;
      i = 0;
    }
  
    for (i; i < this.length; i++) {
      result = callback(result, this[i]);
    }
    return result;
  };
  
  const numbers = [180, 50, 20];
  const result = numbers.reduceFromScratch(SubtractAll);
  function SubtractAll(total, num) {
    return total - num;
  }
  console.log(result);
  