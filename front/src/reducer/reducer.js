const defaultState = {
  step: 1,
  currentColor: 1,
};

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NEXTSTEP':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'PREVIOUSSTEP':
      return {
        ...state,
        step: state.step - 1,
      };
    case 'SELECTCOLOR':
      return {
        ...state,
        currentColor: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
