/**
 * Created by songshuang on 15/12/27.
 */

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Docker");
    response.end();
}).listen(3333);

setTimeout(50000, function () {
    http.close();
});
