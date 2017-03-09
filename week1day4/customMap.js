var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, someFunction){
  var modifiedArray=[];
  for (var i = 0; i < arr.length; i++) {
    modifiedArray.push(someFunction(arr[i]));
  }
  return modifiedArray
}

// map(words, function(word) {
//   return word.length;
// });

console.log(map(words, function(word) {
  return word.length;
}));