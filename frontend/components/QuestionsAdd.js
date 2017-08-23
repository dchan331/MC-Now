import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Card, Row, Col } from 'react-materialize';
import {handleAdd} from '../actions/index';
import PropTypes from 'prop-types';

const QuestionsAdd = ({onHandleAdd, add, handleInput}) => {
  console.log('curr State', add);
  let input;
  handleInput = (input) => {
    input = input
  }
  const letter = String.fromCharCode(97 + add.length)
  console.log('letter', letter);
  return(
    <div>
      <div className="questionAdd">
        <Input id="questionInput" placeholder="Question" />
        <Button id="questionButton" onClick={() => onHandleAdd(1,'q','a')}>Add Question</Button>
      </div>
      {add.map((answer,i) => {
        const letter = String.fromCharCode(97 + i)
        console.log(letter);
        return(<div key={i}>{letter.toUpperCase() + ': ' + answer[letter]}</div>)
      })}
      <div className="questionAdd">
        <Input type="text"
            id="answerInput"
            value={input}
            ref={node => {input = node;}}
            placeholder="Start Typing to Begin!"
            onChange={()=> {handleInput(input.value);}}
        />
        <Button id="answerButton" type="button" onClick={() => (onHandleAdd(letter,input.value))}>+</Button>
      </div>
    </div>
  )};

QuestionsAdd.propTypes = {
  tag: PropTypes.string,
  onHandleAdd: PropTypes.func,
  add: PropTypes.array,
  handleInput: PropTypes.func
};

const mapStateToProps = (state) => {
  console.log('state', state.add)
  return{
    add: state.add
  }
};

const mapDispatchToProps = (dispatch) => ({
  onHandleAdd: (tag, answer) => dispatch(handleAdd(tag, answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsAdd);
