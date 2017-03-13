var https = require('https');
var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {
  var req = https.request(options, function(res) {
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

getAndPrintHTML(requestOptions)