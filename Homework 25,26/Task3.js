const objectCounter = (obj) => {
   let count = 0;
   for (const value in obj) {
      if (
         typeof obj[value] === "object" &&
         !!obj[value] &&
         !Array.isArray(obj[value])
      ) {
         count++;
      }
   }
   return count;
};
console.log(
   objectCounter({
      name: "John",
      childs: {
         first: "a",
         second: "b",
      },
      socialMedias: {
         facebook: true,
         telegram: false,
         whatsApp: true,
      },
      a: {},
   })
);
