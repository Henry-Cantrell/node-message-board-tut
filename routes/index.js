var express = require('express');
var router = express.Router();
const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'my mini messageboard thing', messages: messages});
});

/* GET new post form. */
router.get('/new', function(req, res, next) {
  res.render('form')
})

/* POST submit form action */
router.post('/new', function(req, res, next) {
  messages.push({user: req.body.author, text: req.body.text})
  res.redirect('/')
})

module.exports = router;
