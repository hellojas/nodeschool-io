module.exports = function (dir, type, callback) {
  var fs = require('fs');
  var path = require('path');

  dir = path.normalize(dir);
  fs.readdir(dir, function filterTypes(err, list) {
    if (err) {
      return callback(err);
    }
    var filtered_types = list.filter(function (file) {
      return (path.extname(file) === '.'+type);
    });
      return callback(null,filtered_types);
  });
}
