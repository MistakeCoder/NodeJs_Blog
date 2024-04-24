"use strict";

var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');

var Schema = mongoose.Schema;
var CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  desc: {
    type: String
  },
  videoId: {
    type: String
  },
  level: {
    type: String
  },
  slug: {
    type: String,
    slug: 'name'
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Course', CourseSchema);