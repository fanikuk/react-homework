import { CARD_ACTIONS } from '../actions/constants';

const initialState = {
  name: '',
  number: '',
  cv2: '',
  month: '',
  year: '',
};

const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CARD_ACTIONS.NEW_CARD: {
      return {
        ...state,
        name: payload.name,
        number: payload.number,
        cv2: payload.cv2,
        month: payload.month,
        year: payload.year,
      };
    }
    default:
      return state;
  }
};

export default cardReducer;
