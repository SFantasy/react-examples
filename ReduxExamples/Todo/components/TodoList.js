import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import Todo from './Todo';

let TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        />
    )}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick (id) {
      dispatch(toggleTodo(id));
    }
  }
}

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
