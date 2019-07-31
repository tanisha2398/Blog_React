const filterReducerDefaultState = {
  text: "",
  sortBy: "title"
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
export default filterReducer;
