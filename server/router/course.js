const express = require('express');
const router = express.Router();
const { allCoursesController, updateCourseController, deleteCourseController } = require('../controllers/courseController');
const {courseSchema, updateCourseSchema, deleteCourseSchema}  = require('../utils/check');
const expressJoi = require('@escook/express-joi');

router.get('/find', expressJoi(courseSchema), allCoursesController);
router.get('/update', expressJoi(updateCourseSchema), updateCourseController);
router.get('/delete', expressJoi(deleteCourseSchema), deleteCourseController);


module.exports = router;