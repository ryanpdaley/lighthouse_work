var pigOut = ''
var pigify;
var myArgs = process.argv.slice(2);

for (var i = 0; i < myArgs.length; i++) {
  pigOut = pigOut + ' ' + pigify(myArgs[i]);
}
console.log(pigOut.slice(1));

function pigify(strIn){
  var piggy = '';
  piggy = strIn.slice(1) + strIn[0] + 'ay';
  return piggy;
}
