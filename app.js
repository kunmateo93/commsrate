var express = require("express");
var app = express();


app.get('/mysite', function (req,res) {
    res.send('Hello! This is test of openShift Env!');

})


app.listen(5000);
console.log('Up and running');