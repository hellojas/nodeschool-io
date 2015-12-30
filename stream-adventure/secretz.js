var zlib = require('zlib');
var tar = require('tar');
var fs = require('fs');
var through = require('through')
var crypto = require('crypto');

var cipher_name = process.argv[2];
var passphrase = process.argv[3];

var parser = tar.Parse();
parser.on('entry', function(e) {
  if (e.type !== 'File') {
    return;
  }
  var hasher = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(hasher).pipe(through(function(hash) {
    console.log(hash + ' ' + e.path);
  }));
});

process.stdin
  .pipe(crypto.createDecipher(cipher_name, passphrase))
  .pipe(zlib.createGunzip())
  .pipe(parser)// fs.createReadStream(cipher_name).pipe(parser);
