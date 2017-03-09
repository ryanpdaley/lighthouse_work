var myArgs = process.argv.slice(2);
obfuscate(myArgs[0])

function obfuscate(password){
  var passString = ''
  for (var i = 0; i < password.length; i++) {
    if (password[i] == "a"){
      passString = passString + "4"
    } else if (password[i] == "e"){
      passString = passString + "3"
    } else if (password[i] == "o") {
      passString = passString + "0"
    } else if (password[i] == "l") {
      passString = passString + "1"
    } else {
      passString = passString + password[i]
    }
  }
  return passString
}


