import { DELIVERY_ACTIONS } from './constants';


export const setDelivery = ({ deliveryAddress }) => ({
  type: DELIVERY_ACTIONS.SET_DELIVERY,
  payload: { deliveryAddress },
});

export const setPhone = ({ phone }) => ({
  type: DELIVERY_ACTIONS.SET_PHONE,
  payload: { phone },
});
