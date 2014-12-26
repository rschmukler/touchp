# touchp

Like `mkdir -p`, but with `touch`

## Install

```
npm install touchp
```

## Usage

```js
var touchp = require('touchp');

touchp('some/path/that/may/not/exist.txt', function(err, alreadyExisted) {
  console.log("File " + (alreadyExisted ? 'already exists' : 'was created'));
});

var existedBefore = touchp.sync('some/other/path/that/may/not/exist.txt')
```

## Mkdirp

Touchp also exposes [mkdirp](https://github.com/substack/node-mkdirp) so you can use it's dependency without installing it
yourself.

```js
var mkdirp = require('touchp').mkdirp;
```
