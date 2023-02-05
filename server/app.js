const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./router/user');
const courseRouter = require('./router/user');
const joi = require('joi');

const app= express();
//parse json and urlencode data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//resolve cross-origin-resoure-sharing
app.use(cors());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);

//error middleware and joi validator
app.use((err, req, res, next)=> {
  if(err instanceof joi.ValidationError) {
    return res.send({code:1, message: err.message})
  }
  res.send({code:0, message:err.message})
});

app.listen(3000, ()=>{
  console.log("server is listening at port 3000")
});