var myArgs = process.argv.slice(2);
for (var i = 0; i < myArgs.length; i++) {
  console.log(reverser(myArgs[i]));
}

function reverser(stringToReverse){
  var reversedString = '';
  for (var i = stringToReverse.length - 1; i >= 0; i--) {
    reversedString = reversedString + stringToReverse[i]
  }
  return reversedString
}