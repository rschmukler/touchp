var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

function touchp(filePath, cb) {
  var dirPath = path.dirname(filePath);
  fs.exists(filePath, function(exists) {
    if (exists) return cb(null);
    if (!exists) {
      mkdirp(dirPath, function(err) {
        if(err) return cb(err);
        return touch(filePath, cb);
      });
    }
  });
}

touchp.sync = function(filePath) {
  var dirPath = path.dirname(filePath);
  var exists = fs.existsSync(filePath);
  if (exists) return;
  mkdirp.sync(dirPath);
  touchSync(filePath);
};

module.exports = touchp;

function touch(filePath, cb) {
  fs.writeFile(filePath, '', cb);
}

function touchSync(filePath) {
  fs.writeFileSync(filePath, '');
}
