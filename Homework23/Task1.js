// ա

// const checkNeedSurgery = () => {
//    const probability = Math.round(Math.random() * 100);
//    if (probability <= 30) {
//       return new Promise((resolve) =>
//          setTimeout(() => resolve("Need a surgery"), 10000)
//       );
//    } else {
//       return new Promise((resolve) =>
//          setTimeout(() => resolve("No need a surgery"), 10000)
//       );
//    }
// };

// checkNeedSurgery()
//    .finally(() => alert("The answer of the test is ready..."))
//    .then((text) => alert(text));

// բ
const checkNeedSurgery = () => {
   const probability = Math.round(Math.random() * 100);
   if (probability <= 30)
      return new Promise((resolve) =>
         setTimeout(() => resolve("Need a surgery"), 10000)
      );
   else {
      return new Promise((resolve) =>
         setTimeout(() => resolve("No need a surgery"), 10000)
      );
   }
};

checkNeedSurgery()
   .finally(() => alert("The answer of the test is ready..."))
   .then((text) => alert(text))
   .catch(() => alert("Error"));
