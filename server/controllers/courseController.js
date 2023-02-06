const express = require('express');
const db = require('../config/db');


exports.allCoursesController = (req,res) => {
  let {category, page, size} = req.query;
  page = (page - 1)* size;
  const pageSql ='select * from course where del = 0 and category=? order by id limit ?, ?';
  const totalSql = 'select count(*) as total from course where del=0 and category =?';
  db.query(pageSql, [category, Number(page), Number(size)], (err, resPage)=> {
    if(err) return res.send({code:1, message: err.message});
    db.query(totalSql, category, (err, resTotal)=> {
      if(err) return res.send({code:0, message: err.message})
      res.send({code:0, data: {list: resPage, total: resTotal[0].total}})
    })
  })
};

exports.updateCourseController = (req, res)=> {
  let {title, price, id} =req.query;
  console.log("🚀 ~ file: courseController.js:21 ~ req.query", req.query)
  let sql = 'update course set ';
  let arr = [];
  if(title && price) {
    sql += 'title=?, price=? where id=?'
    arr = [title, Number(price), Number(id)];
  }else if (title) {
    sql+= 'title=? where id=?'
    arr = [title, Number(id)];
  }else if (price) {
    sql+='price=? where id =?';
    arr = [Number(price), Number(id)];
  }
    
  db.query(sql, arr, (err, results)=> {
    console.log("🚀 ~ file: courseController.js:35 ~ db.query ~ arr", arr)
    if(err) return res.send({code:1, message: err.message})
    res.send({code:0, message:"update succeed"})
  })

}

exports.deleteCourseController =(req,res)=> {
  let {id} = req.query;
  sql = 'update course set del= 1 where id=?';
  db.query(sql, id, (err,results)=> {
    if(err) return res.send({code:1, message:err.message});
    res.send("delete successfully")
  })
}