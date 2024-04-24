"use strict";

var express = require('express');

var router = express.Router();

var CourseController = require('../app/controllers/CourseController');

router.post('/update_courses', CourseController.update_courses);
router.post('/store_courses', CourseController.store_courses);
router.get('/create', CourseController.create_courses);
router.get('/:slug', CourseController.detail_courses);
router.get('/', CourseController.list_courses);
module.exports = router;