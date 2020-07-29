import { USER_ACTIONS } from './constants';

export const newUser = ({
  email,
  name,
  surname,
  birthday,
  gender,
  deliveryAddress,
}) => ({
  type: USER_ACTIONS.SET_USER,
  payload: {
    email, name, surname, birthday, gender, deliveryAddress,
  },
});

export const setUser = ({
  id,
  email,
  name,
  surname,
  birthday,
  gender,
  deliveryAddress,
  phone,
  status,
}) => ({
  type: USER_ACTIONS.LOGIN,
  payload: {
    id, email, name, surname, birthday, gender, deliveryAddress, phone, status,
  },
});

export const setUserPhone = phone => ({
  type: USER_ACTIONS.SET_PHONE,
  payload: { phone },
});

export const setUserAddress = deliveryAddress => ({
  type: USER_ACTIONS.SET_DELIVERY,
  payload: { deliveryAddress },
});

export const statusUpdate = () => ({
  type: USER_ACTIONS.STATUS_UPDATE,
});
