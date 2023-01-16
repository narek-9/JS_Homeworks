function delay(ms) {
   return new Promise((resolve, reject) =>
      setTimeout(
         () => resolve(`Should show modal after ${ms / 1000} seconds`),
         ms
      )
   );
}
delay(3).then((text) => alert(text));
