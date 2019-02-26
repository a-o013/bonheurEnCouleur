const defaultState = {
  step: 1,
  order: {},
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
    case 'TOPDF':
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
