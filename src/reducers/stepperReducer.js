import { STEPPER_ACTIONS } from '../actions/constants';

const initialState = {
  accessToDelivery: false,
  accessToCard: false,
};

const stepperReducer = (state = initialState, { type }) => {
  switch (type) {
    case STEPPER_ACTIONS.CARD_ACCESS: {
      return {
        ...state,
        accessToCard: true,
      };
    }
    case STEPPER_ACTIONS.DELIVERY_ACCESS: {
      return {
        ...state,
        accessToDelivery: true,
      };
    }
    case STEPPER_ACTIONS.DELIVERY_DISABLE_ACCESS: {
      return {
        ...state,
        accessToDelivery: false,
      };
    }
    case STEPPER_ACTIONS.CARD_DISABLE_ACCESS: {
      return {
        ...state,
        accessToCard: false,
      };
    }
    default:
      return state;
  }
};
export default stepperReducer;
