const Joi = require('joi');

const userSchema = {
  body: {
    name: Joi.string().alphanum().min(3).max(12).required(),
    password: Joi.string().pattern(/^[^\s]{1,6}$/).required(),
    repassword: Joi.ref("password")
  },
}

module.exports=userSchema;


