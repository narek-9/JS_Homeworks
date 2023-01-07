// Declare a function weekDay that will print the given day of the week. (If the code
//     works on Sunday, then it will print "Sunday" and so on).

const weekDay = () => {
   let currentDay = new Date().getDay();
   let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];
   return days[currentDay];
};
console.log(weekDay());
