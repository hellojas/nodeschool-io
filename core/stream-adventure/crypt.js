var crypto = require('crypto');
var passphrase = process.argv[2]
var encryption = 'aes256';
var decrypter = crypto.createDecipher(encryption, passphrase)

process.stdin.pipe(decrypter).pipe(process.stdout);
