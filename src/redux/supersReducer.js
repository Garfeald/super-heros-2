

const initialState = {
    supers: [],
    details: {}
  };

  export const supersReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
        case 'SET_SUPERS':
          return {
            ...state,
            supers: action.payload,
          };
        case 'SET_DETAILS':
          return {
            ...state,
            details: action.payload,
          }
        case 'TEST':
          return {
            ...state,
            details: action.payload
          }
        default:
          return state;
  }
}