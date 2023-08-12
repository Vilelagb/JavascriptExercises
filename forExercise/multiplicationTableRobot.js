const initNumber = prompt("Choose a value to be multiplied from 1 to 20");
let result = "";

for (let i = 1; i <= 20; i++) {
  result += initNumber + " * " + i + " = " + initNumber * i + "\n";
}

alert("The multiplying result of " + initNumber + " is: " + "\n" + result);
