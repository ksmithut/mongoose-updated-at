'use strict';

var mongoose  = require('mongoose');
var updatedAt = require('../../index');
var Schema    = mongoose.Schema;

var TestSchema = new Schema({
  name: String
});

TestSchema.plugin(updatedAt, {
  updatedAtPath: 'updated_at'
});

module.exports = mongoose.model('Test2', TestSchema);
