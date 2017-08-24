const express = require('express');
const router = express.Router();
const _ = require('underscore');
const bodyParser = require('body-parser');
var fs = require('fs');
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());
const Questions = require('./models/Questions');

// mongoose configuration
const mongoose = require('mongoose');

if (! fs.existsSync('./env.sh')) {
  throw new Error('env.sh file is missing');
}
if (! process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}
mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});
mongoose.connection.on('error', function() {
  console.log('Error connecting to MongoDb. Check MONGODB_URI in env.sh');
  process.exit(1);
});
mongoose.connect(process.env.MONGODB_URI);

// YOUR API ROUTES HERE
router.get('/addQuestion', (req, res) => {
  res.send('Hello World')
});

router.post('/addQuestion', (req, res) => {
  console.log('************', req.body)
  const question = new Questions({
    Question: req.body.question,
    Answer: req.body.answer
  })

  question.save(err => {
    if(err){
      console.log(err)
    }else{
      console.log('successfully added');
    };  
  })

  res.send('success')
});

module.exports = router;
