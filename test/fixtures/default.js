'use strict';

var mongoose  = require('mongoose');
var updatedAt = require('../../index');
var Schema    = mongoose.Schema;

var TestSchema = new Schema({
  name: String
});

TestSchema.plugin(updatedAt);

module.exports = mongoose.model('Test', TestSchema);
