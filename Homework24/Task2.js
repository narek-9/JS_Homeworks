setTimeout(function () {
   let user;
   try {
      user.name = "John";
      alert(user);
   } catch (error) {
      alert("The error has been handled");
      if (error instanceof TypeError) {
         throw new Error("The error is being generaed by me");
      }
   }
}, 2000);
