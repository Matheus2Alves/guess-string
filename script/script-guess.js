var chance = require('chance').Chance()
var randoWord = chance.string()
var randoString = chance.word({length: 5})
console.log(randoString)
  