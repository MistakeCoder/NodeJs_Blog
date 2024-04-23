const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

router.get('/:slug', CourseController.detail_courses);

router.get('/', CourseController.list_courses);

module.exports = router;
