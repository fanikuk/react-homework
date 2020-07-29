import uuid from 'react-uuid';
import { USER_ACTIONS } from '../actions/constants';

const initialState = {
  id: '',
  email: '',
  name: '',
  surname: '',
  birthday: '',
  gender: '',
  deliveryAddress: '',
  phone: '',
  status: false,
  password: '',
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_ACTIONS.LOGIN: {
      return {
        ...state,
        id: payload.id,
        email: payload.email,
        name: payload.name,
        surname: payload.surname,
        birthday: payload.birthday,
        gender: payload.gender,
        deliveryAddress: payload.deliveryAddress,
        phone: payload.phone,
        status: payload.status,
      };
    }
    case USER_ACTIONS.SET_USER: {
      return {
        ...state,
        id: uuid(),
        email: payload.email,
        name: payload.name,
        surname: payload.surname,
        birthday: payload.birthday,
        gender: payload.gender,
        deliveryAddress: payload.deliveryAddress,
      };
    }
    case USER_ACTIONS.STATUS_UPDATE: {
      return {
        ...state,
        status: true,
      };
    }
    case USER_ACTIONS.SET_PHONE: {
      return {
        ...state,
        phone: payload.phone,
      };
    }
    case USER_ACTIONS.SET_DELIVERY: {
      return {
        ...state,
        deliveryAddress: payload.deliveryAddress,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
