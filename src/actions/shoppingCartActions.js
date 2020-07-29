import { SHOPPING_CART_ACTIONS } from './constants';

export const addItem = ({
  id, title, imgUrl, cost,
}) => ({
  type: SHOPPING_CART_ACTIONS.ADD_ITEM,
  payload: {
    id, title, imgUrl, cost,
  },
});

export const incrementCount = id => ({
  type: SHOPPING_CART_ACTIONS.INCREMENT_COUNT,
  payload: { id },
});

export const decrementCount = id => ({
  type: SHOPPING_CART_ACTIONS.DECREMENT_COUNT,
  payload: { id },
});

export const deleteItem = id => ({
  type: SHOPPING_CART_ACTIONS.DELETE_ITEM,
  payload: { id },
});

export const clean = () => ({
  type: SHOPPING_CART_ACTIONS.CLEAN,
});
