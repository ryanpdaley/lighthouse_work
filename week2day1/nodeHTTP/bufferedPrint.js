var https = require('https');
var body = [];
function getAndPrintHTML () {
  var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };

  var req = https.request(requestOptions, function(res) {
    var str = '';
    res.on('data', function (chunk) {
      str += chunk;
    });

    res.on('end', function () {
      console.log(str);
    });
  });

  req.write('data\n');
}

getAndPrintHTML()