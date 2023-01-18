setTimeout(function () {
   let user = {};
   try {
      user.name = "John";
      alert(user);
   } catch (error) {
      if (error instanceof TypeError)
         throw new Error("The error is being generaed by me");
      else alert("The error has been handled");
   }
}, 2000);
