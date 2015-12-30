var thr = require('through2');
var fs = require('fs');
var trumpet = require('trumpet')

var tr = trumpet();
var loud = tr.select('.loud').createStream()

loud.pipe(thr(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  })).pipe(loud)

process.stdin
  .pipe(tr)
  .pipe(process.stdout);
