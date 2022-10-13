const myCustomConcatFunction = function (arr2) {
  console.log("My concat Map Function!");

  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(this[i]);
  }
  for (i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }
  return newArray;
};

Array.prototype.concatFromScratch = myCustomConcatFunction;

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concatFromScratch(arr2);
// console.log(arr1);
// console.log(arr2);
console.log(children);
