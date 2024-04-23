"use strict";

var siteRouter = require('./site');

var coursesRouter = require('../routes/courses');

function route(app) {
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = route;