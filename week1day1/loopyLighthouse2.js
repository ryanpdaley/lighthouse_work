function loopyLighthouse(range, multiples, words){
  var out
  for (var count = range[0]; count <= range[1]; count++) {
    var test1 = (count % multiples[0] === 0);
    var test2 = (count % multiples[1] === 0);
    if ((test1) && (test2)){
      out = words[0] + words[1];
    } else if (test1) {
      out = words[0];
    } else if (test2){
      out = words[1];
    } else {
      out = count;
    }
    console.log(out);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);