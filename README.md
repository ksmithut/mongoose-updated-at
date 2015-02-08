# mongoose-updated-at

[![io.js compatibility](https://img.shields.io/badge/io.js-compatible-brightgreen.svg?style=flat)](https://iojs.org/)
[![NPM version](http://img.shields.io/npm/v/mongoose-updated-at.svg?style=flat)](https://www.npmjs.org/package/mongoose-updated-at)

[![Dependency Status](http://img.shields.io/david/ksmithut/mongoose-updated-at.svg?style=flat)](https://gemnasium.com/ksmithut/mongoose-updated-at)
[![Dev Dependency Status](http://img.shields.io/david/dev/ksmithut/mongoose-updated-at.svg?style=flat)](https://gemnasium.com/ksmithut/mongoose-updated-at)
[![Code Climate](http://img.shields.io/codeclimate/github/ksmithut/mongoose-updated-at.svg?style=flat)](https://codeclimate.com/github/ksmithut/mongoose-updated-at)
[![Build Status](http://img.shields.io/travis/ksmithut/mongoose-updated-at.svg?style=flat)](https://travis-ci.org/ksmithut/mongoose-updated-at)
[![Coverage Status](http://img.shields.io/codeclimate/coverage/github/ksmithut/mongoose-updated-at.svg?style=flat)](https://codeclimate.com/github/ksmithut/mongoose-updated-at)

Another mongoose updated-at module. Gives you some options to change the path
and indexing object.

```bash
npm install --save mongoose-updated-at
```

# Usage

```javascript
'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MySchema = new Schema({
  name: String
});

MySchema.plugin(require('mongoose-updated-at'));
```

To pass in options:

```javascript
MySchema.plugin(require('mongoose-updated-at'), {
  updatedAtPath: 'updatedAt',
  index: false
});
```

# Options

* `updatedAtPath` (String) - The path to add the updatedAt property. Default:
  `'updatedAt'`
* `index` (Mixed) - The indexing options given to this field. See
  [http://mongoosejs.com/docs/api.html#schematype_SchemaType-index](http://mongoosejs.com/docs/api.html#schematype_SchemaType-index).
  Default: `false`
