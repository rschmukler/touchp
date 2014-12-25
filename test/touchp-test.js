var expect = require('expect');
var exists = require('fs').existsSync;
var writeFile = require('fs').writeFileSync;
var rmdir = require('rimraf');
var mkdir = require('mkdirp');

var touchp = require('../');

describe('touchp', function() {

  beforeEach(function(done) {
    mkdir('./test/fixtures', done);
  });

  afterEach(function(done) {
    rmdir('./test/fixtures', done);
  });

  it('exposes mkdir', function() {
    expect(touchp.mkdirp).toBe(mkdir);
  });

  describe('async', function() {
    it('creates a non existing file', function(done) {
      touchp('./test/fixtures/someFile', function(err, alreadyExisted) {
        expect(err).toBe(null);
        expect(alreadyExisted).toBe(false);
        expect(exists('./test/fixtures/someFile')).toBe(true);
        done();
      });
    });

    it('does nothing if the file already exists', function(done) {
      writeFile('./test/fixtures/someFile', '');
      touchp('./test/fixtures/someFile', function(err, alreadyExisted) {
        expect(err).toBe(null);
        expect(alreadyExisted).toBe(true);
        done();
      });
    });
  });
  describe('sync', function() {

    it('creates a non existing file', function() {
      var alreadyExisted = touchp.sync('./test/fixtures/someFile');
      expect(alreadyExisted).toBe(false);
      expect(exists('./test/fixtures/someFile')).toBe(true);
    });

    it('does nothing if the file already exists', function() {
      writeFile('./test/fixtures/someFile', '');
      var alreadyExisted = touchp.sync('./test/fixtures/someFile');
      expect(alreadyExisted).toBe(true);
    });
  });

});
