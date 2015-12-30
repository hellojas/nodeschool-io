var fs = require('fs');
var split = require('split');
var through = require('through2');

var odd = true;

process.stdin
  .pipe(split())
  .pipe(through(function (line, _, next) {
    if (!odd) {
      this.push(line.toString().toUpperCase() + "\n");
      odd = true;
    } else {
      this.push(line.toString().toLowerCase() + "\n");
      odd = false;
    }
    next();
  }))
  .pipe(process.stdout);
