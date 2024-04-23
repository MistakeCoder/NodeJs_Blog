"use strict";

module.exports = {
  multipleMongooseToObject: function multipleMongooseToObject(mongooses) {
    return mongooses.map(function (mongoose) {
      return mongoose.toObject();
    });
  },
  mongooseToObject: function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  }
};