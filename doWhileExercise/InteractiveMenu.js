let choice = "5";

do {
  choice = prompt(
    " 1- Option 1\n 2- Option 2\n 3- Option 3\n 4- Option 4\n 5- Option 5 (Quit)"
  );
  alert("You chose the option: " + choice);
} while (choice !== "5");

alert("Finishing the program");
