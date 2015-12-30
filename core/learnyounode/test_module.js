var getTypes = require('./filter.js');

function printAll (err, data) {
  if (err) {
    console.log('Error' + err);
  } else {
    data.forEach(function (file) {
      console.log(file);
    });
  }
}

getTypes(process.argv[2], process.argv[3], printAll);
