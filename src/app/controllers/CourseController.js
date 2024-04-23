const Course = require('../models/Courses');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    detail_courses(req, res, next) {
        Course.findOne({ slug: req.params.slug }).then(course => {
            res.render('courses/details', { course: mongooseToObject(course) });
        }).catch(next);
    }

    list_courses(req, res, next) {
        Course.find({}).then((courses) => {
            res.render('courses/courses', {
                courses: multipleMongooseToObject(courses)
            });
        }).catch(next);
    }

}

module.exports = new CourseController;
