const Joi = require('joi');

exports.userSchema = {
  body: {
    name: Joi.string().alphanum().min(3).max(12).required(),
    password: Joi.string().pattern(/^[^\s]{1,6}$/).required(),
    repassword: Joi.ref("password")
  },
}

exports.courseSchema = {
  query: {
    category: Joi.string().required(),
    page: Joi.number().integer().required(),
    size: Joi.number().integer().required(),
  }
}


