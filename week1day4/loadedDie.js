// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

// console.log(rollDie());  // 1 (for example)


function makeLoadedDie() {
  var index = 0;
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];


  return function() {
    return list[index++]
  }
};

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6