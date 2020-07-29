import { createStore, combineReducers } from 'redux';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import itemsReducer from './reducers/itemsReducer';
import stepperReducer from './reducers/stepperReducer';
import userReducer from './reducers/userReducer';
import cardReducer from './reducers/cardReducer';
import deliveryReducer from './reducers/deliveryReducer';

const store = createStore(
  combineReducers(
    {
      shoppingCart: shoppingCartReducer,
      items: itemsReducer,
      access: stepperReducer,
      user: userReducer,
      card: cardReducer,
      delivery: deliveryReducer,
    },
  ),
);
export default store;
