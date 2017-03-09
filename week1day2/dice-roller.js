var numberOfRolls = process.argv.slice(2)[0];
var diceString='Rolled ' + numberOfRolls + ' dice: '
for (var i = numberOfRolls - 1; i >= 0; i--) {
  diceString = diceString + rollDice() + ', '
}
console.log(diceString.slice(0, -2))

function rollDice() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min)) + min;
}