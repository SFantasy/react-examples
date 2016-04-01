import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input type="text" ref={node => {
          input = node;
        }}/>
      <button onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
      }}>Add</button>
    </div>
  );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
