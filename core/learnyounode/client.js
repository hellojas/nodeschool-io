
var http = require('http');
// var link = process.argv[2];

var numLinks = process.argv.length;
var list = []

function processLink(count) {
  var results = ""
  http.get(process.argv[count], function(response) {
    response.setEncoding('utf8');
    response.on('data', collect);
    response.on('err', console.error);
    response.on('end', out);
  });

  function collect(data) {
    results += data;
  }

  function out() {
    list[count] = results;
    if (count === numLinks-1) {
      list.forEach(function(i) {
        console.log(i);
      })
    }
  }
}

for (var count = 2; count < numLinks; count++) {
  processLink(count);
}
