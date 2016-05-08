/// <reference path="../typings/main.d.ts" />

import * as express from "express";
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function() {
  var host: string = server.address().address;
  var port: number = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
