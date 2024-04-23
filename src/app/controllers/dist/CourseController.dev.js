"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Course = require('../models/Courses');

var _require = require('../../util/mongoose'),
    multipleMongooseToObject = _require.multipleMongooseToObject,
    mongooseToObject = _require.mongooseToObject;

var CourseController =
/*#__PURE__*/
function () {
  function CourseController() {
    _classCallCheck(this, CourseController);
  }

  _createClass(CourseController, [{
    key: "detail_courses",
    //[GET] /courses/:slug
    value: function detail_courses(req, res, next) {
      Course.findOne({
        slug: req.params.slug
      }).then(function (course) {
        res.render('courses/details', {
          course: mongooseToObject(course)
        });
      })["catch"](next);
    }
  }, {
    key: "list_courses",
    value: function list_courses(req, res, next) {
      Course.find({}).then(function (courses) {
        res.render('courses/courses', {
          courses: multipleMongooseToObject(courses)
        });
      })["catch"](next);
    }
  }]);

  return CourseController;
}();

module.exports = new CourseController();