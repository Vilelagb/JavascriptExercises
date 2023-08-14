const attacker = prompt("What's the attacker's name?");
const attackPower = parseFloat(prompt("What's the attack power?"));

const defender = prompt("What's the defender name?");
let healthPoints = parseFloat(prompt("How much life points does he have?"));
const defensePower = parseFloat(prompt("How much defense power does he have?"));
const hasAShild = prompt("Does he have a shield? (yes/no)");

let damageCaused = 0;

if (attackPower > defensePower && hasAShild === "no") {
  damageCaused = attackPower - defensePower;
} else {
  damageCaused = (attackPower - defensePower) / 2;
}

healthPoints -= damageCaused;

alert(attacker + " caused " + damageCaused + " damage points in " + defender);
alert(
  attacker +
    "\nAttack power: " +
    attackPower +
    "\n\n" +
    defender +
    "\nHealth points: " +
    healthPoints +
    "\nDefense power: " +
    defensePower +
    "\nHas a shield: " +
    hasAShild
);
