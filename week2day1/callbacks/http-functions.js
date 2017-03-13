var https = require('https');

module.exports = function getHTML (options, callback) {
  var req = https.request(options, function(res) {
    var str = '';
    res.on('data', function (chunk) {
      str += chunk;
    });

    res.on('end', function () {
      callback(str)
    });
  });
  req.write('data\n');
};