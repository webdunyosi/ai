const initialState = {
  isOpen: false,
};

const isOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_IS_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default isOpenReducer;