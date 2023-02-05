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
  
}