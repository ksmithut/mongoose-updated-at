'use strict';
/* global describe, before, beforeEach, after, afterEach, it */
/* jshint maxlen: false */

var expect   = require('expect.js');
var mongoose = require('mongoose');

describe('mongoose-updated-at', function () {
  // Connect to the database
  before(function (done) {
    mongoose.connect('mongodb://127.0.0.1/mongoose-updated-at-test', done);
  });

  // Delete the database after testing
  after(function (done) {
    mongoose.connection.db.dropDatabase(done);
  });

  // Level 1 tests
  describe('Level 1', function () {

    it('should save a updatedAt property when a new model is saved', function (done) {
      var TestModel = require('./fixtures/default');
      var before = Date.now();
      var model = new TestModel({name: 'testname'});
      model.save(function (err, model) {
        expect(err).to.be(null);
        expect(model).to.be.an(Object);
        expect(model.name).to.be('testname');
        expect(model.updatedAt).to.be.a(Date);
        expect(model.updatedAt.getTime()).to.be.within(before, Date.now());
        var newBefore = Date.now();
        model.name = 'testname2';
        model.save(function (err, model) {
          expect(err).to.be(null);
          expect(model).to.be.an(Object);
          expect(model.name).to.be('testname2');
          expect(model.updatedAt).to.be.a(Date);
          expect(model.updatedAt.getTime()).to.be.within(newBefore, Date.now());
          done();
        });
      });
    });

    it('should use a different property name', function (done) {
      var TestModel = require('./fixtures/property-name');
      var before = Date.now();
      var model = new TestModel({name: 'testname'});
      model.save(function (err, model) {
        /* jshint camelcase: false */
        expect(err).to.be(null);
        expect(model).to.be.an(Object);
        expect(model.name).to.be('testname');
        expect(model.updatedAt).to.be(undefined);
        expect(model.updated_at).to.be.a(Date);
        expect(model.updated_at.getTime()).to.be.within(before, Date.now());
        var newBefore = Date.now();
        model.name = 'testname2';
        model.save(function (err, model) {
          expect(err).to.be(null);
          expect(model).to.be.an(Object);
          expect(model.name).to.be('testname2');
          expect(model.updated_at).to.be.a(Date);
          expect(model.updated_at.getTime()).to.be.within(newBefore, Date.now());
          done();
        });
      });
    });

    it('should use given indexing options', function (done) {
      var TestModel = require('./fixtures/indexing');
      expect(TestModel.schema.paths.updatedAt._index).to.be(true);
      done();
    });

  });
});
