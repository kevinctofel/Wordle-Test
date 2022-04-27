var express = require('express');
var router = express.Router();
const getJS = require('opmltojs');
const text = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Wordle Golf' });
});

// About page route.
router.get('/about', function (req, res) {
  
  var js = text.readFile('C:\Users\kctof\Documents\Wordle\Wordle-Test\wordle\wordleTest.xml');
  console.log("read the file");
  console.log(js);
  // getJS.parseWithError(js, function (error, data) {
  //   if (error) return console.log("Error occured:", error.message);
  //   console.log(data);
  
  res.render('about');

})


module.exports = router;
