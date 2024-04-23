"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Course = new Schema({
  name: {
    type: String,
    "default": 'None!'
  },
  image: {
    type: String,
    "default": ''
  },
  desc: {
    type: String,
    "default": ''
  }
});
module.exports = mongoose.model('Course', Course);