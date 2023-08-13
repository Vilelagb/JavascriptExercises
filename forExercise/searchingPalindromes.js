const word = prompt("Write a word to find out if it`s a palindrome:");
let invertWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  invertWord += word[i];
}

if (word === invertWord) {
  alert(word + " is a palindrome!");
} else {
  alert(word + " is not a palindrome!");
}
