const db = require('../config/db');
const bcrypt = require('bcryptjs');
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
    if(results.length > 0) res.send("user exist, please choose another name")
    password = bcrypt.hashSync(password,10);
    const num = Math.floor(Math.random()*10)
    const sql1 =`insert into user(name, password, head_image) value (?,?,?)`
    db.query(sql1,[name, password, imgList[num]],(err, results)=> {
      if(err) res.send({code:1, message:err.message})
      res.send({code:0, message:'register succeed'})
    })
  })
}

exports.loginController =(req,res)=> {
  res.send("login succeed")
}