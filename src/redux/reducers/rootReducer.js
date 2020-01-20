const initialState = { list: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, list: [...action.payload] };

    default:
      return state;
  }
}

export default rootReducer;
