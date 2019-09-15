// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000);

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  // maybe test for existence here using fs.stat

  res.writeHead(200, {"Content-Type": "text/html"});

  fs.createReadStream(path.resolve(__dirname, 'build/index.html')) 
    .pipe(res);

}).listen(process.env.PORT);