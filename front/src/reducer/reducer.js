const defaultState = {
  step: 1,
  currentPlanche: true,
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
        currentPlanche: state.currentPlanche,
      };
    case 'SELECTCHOCO':
      return {
        ...state,
        currentPlanche: state.currentPlanchefalse,
      };
    default:
      return state;
  }
};

export default Reducer;
