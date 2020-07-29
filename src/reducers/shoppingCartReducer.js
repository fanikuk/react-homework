import { SHOPPING_CART_ACTIONS } from '../actions/constants';

const initialState = {
  shoppingCart: [],
};

const shoppingCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOPPING_CART_ACTIONS.ADD_ITEM:
    {
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          {
            id: payload.id,
            title: payload.title,
            imgUrl: payload.imgUrl,
            cost: payload.cost,
            count: 1,
          },
        ],
      };
    }

    case SHOPPING_CART_ACTIONS.CLEAN: {
      return {
        ...state,
        shoppingCart: [],
      };
    }

    case SHOPPING_CART_ACTIONS.DELETE_ITEM:
    {
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(item => item.id !== payload.id),
      };
    }

    case SHOPPING_CART_ACTIONS.INCREMENT_COUNT:
    {
      return {
        ...state,
        shoppingCart: state.shoppingCart.map(item => {
          if (item.id === payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
      };
    }

    case SHOPPING_CART_ACTIONS.DECREMENT_COUNT:
    {
      return {
        ...state,
        shoppingCart: state.shoppingCart.map(item => {
          if (item.id === payload.id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};
export default shoppingCartReducer;
