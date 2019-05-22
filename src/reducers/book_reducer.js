const bookReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [action.book, ...state]
    case 'REMOVE_BOOK':
      return [...state.slice(0, action.bookIndex),
        ...state.slice(action.bookIndex + 1)]
    default:
      return state
  };
};

export default bookReducer;
