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
