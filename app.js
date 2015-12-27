/**
 * Created by songshuang on 15/12/27.
 */

var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Docker");
    response.end();
});

server.listen(3333);

setTimeout(function () {
   server.close();
}, 5000);
