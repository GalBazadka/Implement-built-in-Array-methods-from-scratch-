const myCustomReverseFunction = function () {
  console.log("My Custom Reverse Function!");

  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(this[this.length - i - 1]);
  }

  for (i = 0; i < this.length; i++) {
    this[i] = newArray[i];
  }

  return this;
};

Array.prototype.reverseFromScratch = myCustomReverseFunction;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverseFromScratch();
console.log(fruits);
