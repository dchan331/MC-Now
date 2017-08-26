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

router.get('/answerQuestion', (req, res) => {
  Questions.find({})
    .then(resp => {
      res.send(resp)
    })
});

router.post('/answerquestion', (req, res) => {
  const keys = Object.keys(req.body).filter(item => (item !== "count"))
  keys.forEach(key => {
    Questions.findOne({_id: key})
    .then(resp => {
      return matchingAns(resp, req.body[key])
    })
    .then(resp2 => {
      Questions.findOneAndUpdate({_id: key},{Feedback: resp2})
      .catch(err => {
      })
    })
    .then(
      res.send('correct answers response')
    )
    .catch(err => {
      console.log('error' , err);
    })
  })
});


function matchingAns(resp, answers){
  const feedback = resp.Feedback || {};
  answers.answer.forEach(ans => {
    if(feedback.hasOwnProperty(ans.val) && ans.chosen){
      console.log('in here');
      feedback[ans.val] += 1
    }else if(!feedback.hasOwnProperty(ans.val) && ans.chosen){
      feedback[ans.val] = 1
    }else if(!feedback.hasOwnProperty(ans.val) && !ans.chosen){
      feedback[ans.val] = 0
    }
  })
  return feedback
}

module.exports = router;
