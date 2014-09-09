'use strict';

module.exports = function updatedAt(schema, options) {
  // Set the default options
  options = options || {};
  var updatedAtPath = options.updatedAtPath || 'updatedAt';
  var index         = options.index || false;

  // Set the new path
  schema
    .path(updatedAtPath, Date)
    .path(updatedAtPath).default(Date.now);

  // Set the updated at property every time the model is saved.
  schema.pre('save', function (next) {
    this.set(updatedAtPath, Date.now());
    next();
  });

  // If the index option was set, set the index
  if (index) {
    schema.path(updatedAtPath).index(index);
  }

};
