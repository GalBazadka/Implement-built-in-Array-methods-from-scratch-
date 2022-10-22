String.prototype.includesFromScratch = function (txt, position = 0) {
  console.log("My Custom includes Function!");

  first_char = txt[0];
  let i = position;
  for (i; i < this.length; i++) {
    if (this[i] === first_char) {
      if (txt === this.slice(i, i + txt.length)) {
        return true;
      }
    }
  }
  return false;
};

let text = "Hello world, welcome to the universe.";
let result = text.includesFromScratch("world");
console.log(result);
