var combine = require('stream-combiner');
var split = require('split');
var tr = require('through2');
var zlib = require('zlib');

module.exports = function() {
  var genres = [];
  var curGenre = -1

  var input = tr(write, end);

  function write (buf, _ , next) {
    if (buf.length === 0) return next();
    line = JSON.parse(buf);
    if (line.type === 'genre') {
      genres.push({'name':line.name,'books':[]});
      curGenre += 1;
    } else if (line.type === 'book') {
      genres[curGenre].books.push(line.name);
    }
    next();
  }

  function end(end) {
    for (genre in genres) {
      this.push(JSON.stringify(genres[genre]) + '\n')
    }
    end();
  };

  return combine(split('\n'), input,zlib.createGzip())
    .on('end', function() {
      console.log("done");
    })
}
