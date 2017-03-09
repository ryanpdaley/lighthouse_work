function countLetters(phrase){
  var letters = {};
  var noSpaces = phrase.split(" ").join("")
  for (var i = 0; i < noSpaces.length; i++) {
    if (noSpaces[i] in letters){
      letters[noSpaces[i]]++;
    } else {
      letters[noSpaces[i]] = 1;
    }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"))
console.log(countLetters("abcdefghijklmnopqrstuvwxyz"))
console.log(countLetters("aaaaaaaaaaaaaaaà"))