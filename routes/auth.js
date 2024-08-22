var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Express' });
  });
  

module.exports = router;
