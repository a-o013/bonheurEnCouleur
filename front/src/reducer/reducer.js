const defaultState = {
  step: 1,
  popUpColors: 'off',
  popUpPackages: 'off',
  currentColor: 1,
  limit: 1,
  models: 'model1',
  amount: 30,
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
    case 'POPOFFCOLOR':
      return {
        ...state,
        popUpColors: 'off',
      };
    case 'POPPACKAGE':
      return {
        ...state,
        popUpPackages: 'on',
      };
    case 'POPOFFPACKAGE':
      return {
        ...state,
        popUpPackages: 'off',
      };
    case 'SELECTCOLOR':
      return {
        ...state,
        currentColor: action.payload,
      };
    case 'NEXTMODEL':
      if (state.limit === 5) {
        return {
          ...state,
          limit: 1,
          models: 'model1',
        };
      }
      return {
        ...state,
        limit: state.limit + 1,
        models: `model${state.limit + 1}`,
      };
    case 'PREVIOUSMODEL':
      if (state.limit === 1) {
        return {
          ...state,
          limit: 5,
          models: 'model5',
        };
      }
      return {
        ...state,
        limit: state.limit - 1,
        models: `model${state.limit - 1}`,
      };
    case 'TO30':
      return {
        ...state,
        amount: 30,
      };
    case 'TO40':
      return {
        ...state,
        amount: 40,
      };
    case 'TO50':
      return {
        ...state,
        amount: 50,
      };
    case 'TO60':
      return {
        ...state,
        amount: 60,
      };
    default:
      return state;
  }
};

export default Reducer;
