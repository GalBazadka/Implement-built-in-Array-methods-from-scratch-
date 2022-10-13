const myCustomSortFunction = function (callback) {
  console.log("My Custom sort Function!");

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j + 1] < this[j]) {
        [this[j + 1], this[j]] = [this[j], this[j + 1]];
      }
    }
  }
  return this;
};

Array.prototype.sortFromScratch = myCustomSortFunction;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sortFromScratch();
console.log(fruits);
