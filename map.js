Array.prototype.mapFromScratch = function (callback) {
    console.log("My Custom Map Function!");
  
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };
  
  const numbers = [4, 9, 16, 25];
  const newArr = numbers.mapFromScratch(addOneFunction);
  console.log(newArr);
  
  function addOneFunction(num) {
    return num + 1;
  }
  