Array.prototype.fillFromScratch = function (value, start = 0, end = this.length) {
  console.log("My Custom fill Function!");
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fillFromScratch("Kiwi", 2, 4);
console.log(fruits);
