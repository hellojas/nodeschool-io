var http = require('http');
var url = require('url');

var port = process.argv[2]

var server = http.createServer(function(req, res) {

  console.log("GET:" + req["url"]);

  var url_parse = url.parse(req["url"])
  var result = null;

  if (url_parse['pathname'] == "/api/parsetime") {

    var date = new Date(url_parse['query'].split("=")[1]);
    console.log("test" + url_parse['query']['iso'])
    console.log(url_parse['query'].split("T")[1]);
    result = JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    });
  }

  else if (url_parse['pathname'] == "/api/unixtime") {
    var date = new Date(url_parse['query'].split("=")[1]);
    result = JSON.stringify({
      "unixtime": (date.getTime())
    });
  }
  if (result) {
    console.log("result = " + result);
    res.end(result);
  };

});

server.listen(port, function() {
  console.log("bound to server on port " + port);
});
