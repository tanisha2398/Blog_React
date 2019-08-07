const filterReducerDefaultState = {
  text: "",
  searchBy: "title"
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SEARCH_BY_HEAD":
      return {
        ...state,
        searchBy: "head"
      };
    case "SEARCH_BY_TITLE":
      return {
        ...state,
        searchBy: "title"
      };
    default:
      return state;
  }
};
export default filterReducer;
