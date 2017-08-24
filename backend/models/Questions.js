const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  Question: {
    type: String,
    required: true
  },
  Answer: {
    type: Array,
    required: true
  },
  Solution: {
    type: String,
    required: false
  },
  Date:{
    type: Date,
    required: false
  },
  Feedback:{
    type: Array,
    required: false
  }
});

module.exports =  mongoose.model('Question', QuestionSchema)
