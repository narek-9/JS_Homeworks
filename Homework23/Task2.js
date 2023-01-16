function delay(ms) {
   return new Promise((resolve) =>
      setTimeout(
         () => resolve(`Should show modal after ${ms / 1000} seconds`),
         ms
      )
   );
}
delay(2000).then((text) => alert(text));
