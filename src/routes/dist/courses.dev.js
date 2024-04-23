"use strict";

var express = require('express');

var router = express.Router();

var CourseController = require('../app/controllers/CourseController');

router.get('/:slug', CourseController.detail_courses);
router.get('/', CourseController.list_courses);
module.exports = router;