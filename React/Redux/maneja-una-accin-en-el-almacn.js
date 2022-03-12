const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
   if (action.type === "LOGIN") {
    return {
      login : !state.login
    };
  } else {
    return state;
  }
  
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};