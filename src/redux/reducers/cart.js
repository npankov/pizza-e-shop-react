const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum , 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const currentPizzasItems = !state.items[action.payload.id]
        ?
        [action.payload]
        :
        [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzasItems,
          totalPrice: getTotalPrice(currentPizzasItems)
        }
      };

      const allPizzas = Object.values(newItems).map((el) => el.items).flat();
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice
      }

    case 'CLEAR_CART':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0
      }

    default:
      return state;
  }
}

export default cart;
