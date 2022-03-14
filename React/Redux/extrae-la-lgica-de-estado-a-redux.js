// Define ADD, addMessage(), messageReducer(), y store aquí:
const ADD = "ADD";
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

const messageReducer = (state = [], {type,message})=>{
  switch (type) {
    case ADD:
      return [...state, message];
      break;
    default:
      return state;
  }
}


const store = Redux.createStore(messageReducer);