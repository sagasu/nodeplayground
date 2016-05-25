"use strict";
// Use strict is required, because classes are not yet supported outside of strict mode.
//  Block-scoped declarations (let, const, function, class) not yet supported outside strict mode


//node ./js/expressApp.js
//http://localhost:8888/

var cin = require('./expressAppFiles/classesInNode')

var express = require('express');
var app = express();

app.get('/', function(req, res){
  var mc = new cin.myClass();
  var funcResult = mc.myFunc();

  res.send(200, `Hello World ${funcResult} `)
});
app.listen(8888);
