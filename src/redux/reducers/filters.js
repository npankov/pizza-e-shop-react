const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload
      }
    default:
      return state;
  }
  // if (action.type === 'SET_SORT_BY') {
  //   return {
  //     ...state,
  //     sortBy: action.payload
  //   }
  // }
  // if (action.type === 'SET_CATEGORY') {
  //   return {
  //     ...state,
  //     category: action.payload
  //   }
  // }
  // return state;
}

export default filters;
