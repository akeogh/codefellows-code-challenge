var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {

  var respond = function(code, body) {
    response.writeHead(code, {'Content-Type': 'text/html'});
    response.end(body);
  };

  var html = fs.readFile('index.html', 'utf8', function(error, data) {
    if (error) {
      respond(500, 'Something went wrong! ' + error.toString());
    } else {
      respond(200, data);
    }
  });
}).listen(3000);
console.log("Server listening on port 3000");
