function delay(ms) {
   return new Promise((resolve, reject) => setTimeout((a) => resolve(), ms));
}
delay(2000).then(() => alert("Should show modal after 2 seconds"));
