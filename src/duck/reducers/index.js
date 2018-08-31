const initialState = {};

const duckReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  console.log(state);

  switch (action.type) {
    case 'DUCK_CHANGE':
      return {
        ...state,
        [action.payload.form]: {
          ...state[action.payload.form],
          [action.payload.field]: action.payload.value,
        },
      };

    case 'DUCK_REGISTER':
      return {
        ...state,
        [action.payload.form]: {
          ...state[action.payload.form],
          [action.payload.field]: '',
        },
      };

    default:
      return state;
  }
};

export default duckReducer;
