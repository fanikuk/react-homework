import { DELIVERY_ACTIONS } from '../actions/constants';

const initialState = {
  deliveryAddress: '',
  phone: '',
};

const deliveryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELIVERY_ACTIONS.SET_DELIVERY: {
      return {
        ...state,
        deliveryAddress: payload.deliveryAddress,
      };
    }
    case DELIVERY_ACTIONS.SET_PHONE: {
      return {
        ...state,
        phone: payload.phone,
      };
    }
    default:
      return state;
  }
};
export default deliveryReducer;
