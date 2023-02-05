const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../utils/jwtSecretKey');

const imgList = [
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/10.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/11.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/12.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/13.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/15.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/16.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/17.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/18.jpeg',
  'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/19.jpeg',
];

exports.registerController =(req, res) => {
  let {name,password}= req.body;
  if (!name || !password) {
    return res.send({code:1, message:"name or password can not be empty"})
  }
  //query user in db
  const sql = 'select * from user where name=?'
  db.query(sql, name, (err, results)=> {
    if(err) return res.send(err.message)
    if(results.length > 0) return res.send("user exist, please choose another name")
    password = bcrypt.hashSync(password,10);
    const num = Math.floor(Math.random()*10)
    const sql1 =`insert into user(name, password, head_image) value (?,?,?)`
    db.query(sql1,[name, password, imgList[num]],(err, results)=> {
      if(err) res.send({code:1, message:err.message})
      res.send({code:0, message:'register succeed'})
    })
  })
};

exports.loginController =(req,res)=> {
  let {name, password} = req.body;
  if (!name ||!password) res.send({code:1, message:"name or password can not be empty"})
  const sql = "select * from user where name = ?";
  db.query(sql, name, (err, results)=> {
    if(err) res.send({code:1, message:err.message});
    if (results.length === 0) {
      return res.send({code:0, message:"account not exist, please register"})
    }
    if(!bcrypt.compareSync(password, results[0].password)) {
      res.send({code:1, message: "wrong password"})
    }
    const user = {...results[0], password: ""};
    const token = jwt.sign(user, jwtSecretKey, {expiresIn: "24h"})
    res.send({code:0, message:"login succeed", token: "Bearer "+token})
  })
};

exports.userInfoController = (req, res)=> {
  //parse token and get userInfo
  const token = req.headers.authorization;
  const userInfo = jwt.verify(token.split("Bearer ")[1],jwtSecretKey)
  res.send({code:0, data: {
    name:userInfo.name,
    head_img: userInfo.head_img,
  }})
}