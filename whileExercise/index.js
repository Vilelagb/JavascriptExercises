const tourist = prompt('What is your name?')
let didYouTravel = prompt('Have you ever traveled to any city? (yes/no)')
let visitedCities = ''
let count = 0

while (didYouTravel === 'yes') {
  let city = prompt('What city did you travel?')
  visitedCities += ' - ' + city + '\n'
  count++
  didYouTravel = prompt('Have you ever traveled to another city? (yes/no)')
}

alert(tourist + ' you have already traveled to these ' + count + ' cities:'+ '\n' + visitedCities)
