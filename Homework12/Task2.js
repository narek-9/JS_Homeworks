// Create a "rock-paper-scissors" game where the computer will keep random
// one of the rock, scissors, or paper values ​​and depends on user's pormpt
// "You win!", "You loose..." or "Draw" will be printed from the entered value. Make user
// validation of the value imported by

const rockPaperScissors = (userValue) => {
   let playAgain = true;
   while (playAgain) {
      const possibleValues = ["rock", "scissors", "paper"];
      const randomValue = Math.floor(Math.random() * possibleValues.length);
      const computerValue = possibleValues[randomValue];

      userValue = getUserValue();

      let text = "You win!";
      if (
         (computerValue === "rock" && userValue === "scissors") ||
         (computerValue === "scissors" && userValue === "paper") ||
         (computerValue === "paper" && userValue === "rock")
      ) {
         text = "You loose...";
      } else if (computerValue === userValue) {
         text = "Draw";
      }
      alert(text);
      playAgain = confirm("Play again?");
   }
};

const getUserValue = () => {
   let userValue = prompt("Choose rock, scissors or paper");
   while (
      userValue !== "rock" &&
      userValue !== "scissors" &&
      userValue !== "paper"
   ) {
      userValue = prompt("There is no such value!Enter again");
   }
   return userValue;
};

console.log(rockPaperScissors(getUserValue()));
