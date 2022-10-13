const myCustomIncludesFunction = function (txt) {
  console.log("My Custom includes Function!");

  first_char = txt[0];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === first_char) {
      if (txt === this.slice(i, i + txt.length)) {
        return true;
      }
    }
  }
  return false;
};

String.prototype.includesFromScratch = myCustomIncludesFunction;

let text = "Hello world, welcome to the universe.";
let result = text.includesFromScratch("world");
console.log(result);
