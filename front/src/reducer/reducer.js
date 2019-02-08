const defaultState = {
  step: 1,
  currentColor: 1,
  limit: 1,
  models: 'model1',
  amount: 30,
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
