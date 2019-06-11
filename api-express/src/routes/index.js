import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("Welcome to xebia version 1.0.0")
});

export default router;
