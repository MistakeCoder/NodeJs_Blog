const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'None!' },
    image: { type: String, default: '' },
    desc: { type: String, default: '' }
});

module.exports = mongoose.model('Course', Course);