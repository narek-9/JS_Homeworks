// Create a function that takes 2 parameters as an argument
// the first is text, and the second is a symbol (letter, character, etc.).
// The function should delete all characters found in the received text,
// which is passed to the function as the second parameter (to solve the problem,
// using loop / loops and string method / methods.

const symbolDeleter = (text, symbol) => {
   text = text.toLowerCase();
   let result = "";
   while (text.indexOf(symbol) !== -1) {
      result += text.slice(0, text.indexOf(symbol));
      text = text.slice(text.indexOf(symbol) + 1);
   }
   return result + text;
};

const wordDeleter = (text, word) => {
   text = text.toLowerCase();
   let result = "";
   const length = word.length;
   while (text.indexOf(word) !== -1) {
      result += text.slice(0, text.indexOf(word));
      text = text.slice(text.indexOf(word) + length);
   }
   return result + text;
};
console.log(wordDeleter("This is Javascript", "is"));
