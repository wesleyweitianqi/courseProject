const express = require('express');
const router = express.Router();
const { allCoursesController } = require('../controllers/courseController');
const {courseSchema}  = require('../utils/check');
const expressJoi = require('@escook/express-joi');

router.get('/find', expressJoi(courseSchema), allCoursesController);

module.exports = router;