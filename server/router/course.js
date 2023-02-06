const express = require('express');
const router = express.Router();
const { allCoursesController, updateCourseController } = require('../controllers/courseController');
const {courseSchema, updateCourseSchema}  = require('../utils/check');
const expressJoi = require('@escook/express-joi');

router.get('/find', expressJoi(courseSchema), allCoursesController);
router.get('/update', expressJoi(updateCourseSchema), updateCourseController);


module.exports = router;