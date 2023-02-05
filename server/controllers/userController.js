const db = require('../config/db');

exports.registerController =(req,res)=> {
  const sql ='insert into user (name, password, head_image) value ("Richard", "123456", "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/18.jpeg")'
  db.query(sql, (err, results)=> {
    if(err) {
      return res.send({code:1, message:err.message});
    };
    res.send({code:0,data: "register succeed"})
  })

}

exports.loginController =(req,res)=> {
  res.send("login succeed")
}