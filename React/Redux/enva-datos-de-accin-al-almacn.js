const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Cambia el código debajo de esta línea
      case ADD_NOTE:
      state = action.text
      return state

    // Cambia el código encima de esta línea
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Cambia el código debajo de esta línea
    return {
      type: ADD_NOTE,
      text: note
    }
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());