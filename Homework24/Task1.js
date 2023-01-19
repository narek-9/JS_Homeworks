const printer = (text) => alert(text);

(async () => {
   await new Promise((resolve) => setTimeout(resolve, 5000));
   printer("Hello world");
})();
