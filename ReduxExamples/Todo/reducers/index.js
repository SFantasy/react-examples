import { combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        text: action.text
      });
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default: return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'EDIT_TODO':
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default: return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
