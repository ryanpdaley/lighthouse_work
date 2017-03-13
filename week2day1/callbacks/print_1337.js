var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

var leetMap = {
  a : '4',
  e : '3',
  l : '1',
  o : '0',
  s : '5',
  t : '7',
  'ck' : 'x',
  'er' : '0r',
  'you' : 'j00'
};

function print1337 (html) {
  var htmlString = html.toString();
  var leetString = '';
  for (var key in leetMap) {
    console.log(`looking for ${key} and replacing it with ${leetMap[key]}`)
    var find = key;
    var re = new RegExp(find, 'g');
    htmlString = htmlString.replace(re, leetMap[key]);
  }
  console.log(htmlString);
}

//print1337('This is a test')
getHTML(requestOptions, print1337)