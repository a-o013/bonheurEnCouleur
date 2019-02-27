import data from '../assets/models.json';

const defaultState = {
  step: 1,
  currentPlanche: 'on',
  popUpColors: 'off',
  popUpPackages: 'off',
  currentColor: 1,
  limit: 1,
  amount: 30,
  currentPreview: data.model1[30],
  regulator: 0,
  total: 0,
  prix: 0,
  resumerFleurs: [],
  warning: {},
  currentAmount: data.counters,
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
          currentPreview: data.model1[state.amount],
        };
      }
      return {
        ...state,
        limit: state.limit + 1,
        currentPreview: data[`model${state.limit + 1}`][state.amount],
      };
    case 'PREVIOUSMODEL':
      if (state.limit === 1) {
        return {
          ...state,
          limit: 5,
          currentPreview: data.model5[state.amount],
        };
      }
      return {
        ...state,
        limit: state.limit - 1,
        currentPreview: data[`model${state.limit - 1}`][state.amount],
      };
    case 'TO30':
      return {
        ...state,
        amount: 30,
        currentPreview: data.model1[30],
      };
    case 'TO40':
      return {
        ...state,
        amount: 40,
        currentPreview: data.model1[40],
      };
    case 'TO50':
      return {
        ...state,
        amount: 50,
        currentPreview: data.model1[50],
      };
    case 'TO60':
      return {
        ...state,
        amount: 60,
        currentPreview: data.model1[60],
      };
    case 'DELET':
      return {
        ...state,
        currentPreview: data.default[0],
      };
    case 'CHANGECOLOR': {
      const value = state.currentPreview[action.payload.column][action.payload.flower - 1]
        === state.currentColor ? 'empty-flower' : state.currentColor;
      const array = state.currentPreview[action.payload.column].map((elem, index) => {
        if (index !== action.payload.flower - 1) {
          return elem;
        }
        return value;
      });
      return {
        ...state,
        currentPreview: {
          ...state.currentPreview,
          [action.payload.column]: array,
        },
        regulator: state.regulator + 1,
      };
    }
    case 'RECOUNT':
      return {
        ...state,
        regulator: state.regulator + 1,
      };
    case 'TOTALS':
      return {
        ...state,
        total: action.payload,
      };
    case 'SET_PRICE':
      return {
        ...state,
        price: action.payload,
      };
    case 'SET_RESUMERFLOWER':
      return {
        ...state,
        resumerFleurs: action.payload,
      };
    case 'WARNING':
      return {
        ...state,
        warning: {
          ...state.warning,
          isVisible: action.payload.isVisible,
          message: action.payload.message,
        },
      };
    case 'CHANGEAMOUNT':
      if (action.payload.name === 'button-add' && state.currentAmount[action.payload.key - 1] !== 100) {
        return {
          ...state,
          currentAmount: {
            ...state.currentAmount,
            [action.payload.key - 1]: state.currentAmount[action.payload.key - 1] + 1,
          },
        };
      }
      if (action.payload.name === 'button-remove' && state.currentAmount[action.payload.key - 1] !== 0) {
        return {
          ...state,
          currentAmount: {
            ...state.currentAmount,
            [action.payload.key - 1]: state.currentAmount[action.payload.key - 1] - 1,
          },
        };
      }
      if (action.payload.name === 'input' && action.payload.value >= 0) {
        return {
          ...state,
          currentAmount: {
            ...state.currentAmount,
            [action.payload.key - 1]: (action.payload.value === '' ? 0 : parseInt(action.payload.value, 0)),
          },
        };
      }
      return {
        state,
        currentAmount: state.currentAmount,
      };
    default:
      return state;
  }
};

export default Reducer;
