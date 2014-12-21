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
