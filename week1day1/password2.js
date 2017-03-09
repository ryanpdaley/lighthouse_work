dict = {'a': '4', 'e': '3', 'o':'0', 'l': '1'}

var myArgs = process.argv.slice(2);
console.log(obfuscate(myArgs[0]))

function obfuscate(password){
  var passString = ''
  for (var i = 0; i < password.length; i++) {
    if (password[i] in dict){
      passString = passString + dict[password[i]]
    } else {
      passString = passString + password[i]
   }
 }
 return passString
}