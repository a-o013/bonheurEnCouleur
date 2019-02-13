const defaultState = {
  step: 1,
  popUpColors: 'off',
  popUpPackages: 'off',
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
    case 'POPCOLORS':
      return {
        ...state,
        popUpColors: 'on',
      };
    case 'POPOFF':
      return {
        ...state,
        popUpColors: 'off',
      };
    case 'POPPACKAGE':
      return {
        ...state,
        popUpPackages: 'on',
      };
    default:
      return state;
  }
};

export default Reducer;
