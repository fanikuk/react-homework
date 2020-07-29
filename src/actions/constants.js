export const SHOPPING_CART_ACTIONS = {
  INCREMENT_COUNT: 'shoppingCartActions/incrementCount',
  DECREMENT_COUNT: 'shoppingCartActions/decrementCount',
  ADD_ITEM: 'shoppingCartActions/addItem',
  DELETE_ITEM: 'shoppingCartActions/deleteItem',
  CLEAN: 'shoppingCartActions/clean',
};

export const STEPPER_ACTIONS = {
  DELIVERY_ACCESS: 'stepperActions/deliveryAccess',
  DELIVERY_DISABLE_ACCESS: 'stepperActions/deliveryDisableAccess',
  CARD_ACCESS: 'stepperActions/cardAccess',
  CARD_DISABLE_ACCESS: 'stepperActions/cardDisableAccess',
};

export const USER_ACTIONS = {
  LOGIN: 'userActions/setUser',
  SET_USER: 'userActions/newUser',
  SET_PHONE: 'userActions/setUserPhone',
  SET_DELIVERY: 'userActions/setUserAddress',
  STATUS_UPDATE: 'userActions/statusUpdate',
};

export const DELIVERY_ACTIONS = {
  SET_DELIVERY: 'deliveryActions/setDelivery',
  SET_PHONE: 'deliveryPhones/setPhone',
};

export const CARD_ACTIONS = {
  NEW_CARD: 'cardActions/setCard',
};
