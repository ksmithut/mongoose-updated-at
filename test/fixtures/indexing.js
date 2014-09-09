'use strict';

var mongoose  = require('mongoose');
var updatedAt = require('../../index');
var Schema    = mongoose.Schema;

var TestSchema = new Schema({
  name: String
});

TestSchema.plugin(updatedAt, {
  index: true
});

module.exports = mongoose.model('Test3', TestSchema);
