const defaultState = {
  step: 1,
  currentPlanche: 'on',
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
    case 'SELECTGRAY':
      return {
        ...state,
        currentPlanche: 'on',
      };
    case 'SELECTCHOCO':
      return {
        ...state,
        currentPlanche: 'off',
      };
    default:
      return state;
  }
};

export default Reducer;
