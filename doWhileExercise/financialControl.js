let money = prompt("How much initial money do you have?");
let option = "";

do {
  option = prompt(
    "Your balance is: $" +
      money +
      ", chose an option: " +
      "\n" +
      "1- Add money\n" +
      "2- Remove money\n" +
      "3- Quit"
  );
  switch (option) {
    case "1":
      let addMoney = prompt("How much money do you want to add?");
      money = parseFloat(money) + parseFloat(addMoney);
      break;
    case "2":
      let removeMoney = prompt("How much money do you want to remove?");
      money -= removeMoney;
      break;
    case "3":
      alert("Finishing the program");
  }
} while (option !== "3");
