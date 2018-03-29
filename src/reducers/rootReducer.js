import { ADD_TODO, UPDATE_TODO, EDIT_TODO, REMOVE_TODO } from '../actions/actionCreators.js';

const initialState = {
  todos: [
    {
      id: 0,
      time: '8:00',
      task: 'Exercise',
      img: './images/fist.png',
      state: false
    },
    {
      id: 1,
      time: '8:30',
      task: 'Go to work',
      img: './images/work.png',
      state: false
    },
    {
      id: 2,
      time: '14:30',
      task: 'Go to a meeting',
      img: './images/meeting.png',
      state: false
    },
    {
      id: 3,
      time: '18:00',
      task: 'Go to the dinner',
      img: './images/dinner.png',
      state: false
    }
  ],
  currentId: 3
}

function rootReducer(state = initialState, action) {
  let newState, todos;

  switch (action.type) {
    case ADD_TODO:
      newState = {...state};
      newState.currentId++;
      return {
        ...newState,
        todos: [...newState.todos,
          {
            id: newState.currentId,
            time: action.time,
            task: action.task,
            img: !action.img ? './images/fist.png' : action.img,
            state: false
          }
        ]
      };

    case UPDATE_TODO:
      newState = {...state};

      // find updated todo and change its state
      todos = newState.todos.map(todo => todo.id === action.id ? {...todo, state: !todo.state} : todo);

      return {...state, todos};

    case EDIT_TODO:
      newState = {...state};

      // find and update a todo
      todos = newState.todos.map(todo => {

        if (todo.id === action.id) {
          return {
            ...todo,
            time: action.time,
            task: action.task,
            img: action.img === '' ? './images/fist.png' : action.img
          }
        } else {
          return todo;
        }

      });

      return {...newState, todos};

    case REMOVE_TODO:
      newState = {...state};

      // find and filter out a todo
      todos = newState.todos.filter(todo => todo.id !== action.id);

      return {...newState, todos};

    default:
      return state;
  }

}

export default rootReducer;
