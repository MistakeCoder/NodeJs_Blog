"use strict";

var mongoose = require('mongoose');

function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb://127.0.0.1/F8_learning_web').then(function () {
            console.log('connected');
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  connect: connect
};