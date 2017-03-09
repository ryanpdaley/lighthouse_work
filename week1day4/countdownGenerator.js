var countdownGenerator = function (x) {
  var statement = function() {
    var outString = ''
    if (x > 0){
      outString = `T-minus ${x}...`
    } else if (x == 0) {
      outString = "Blast Off!"
    } else {
      outString = "Rockets already gone, bub!"
    }
    x--
    console.log(outString);
  }
  return statement;
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!