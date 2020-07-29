import { CARD_ACTIONS } from './constants';


export const setCard = ({
  name, number, cv2, month, year,
}) => ({
  type: CARD_ACTIONS.NEW_CARD,
  payload: {
    name, number, cv2, month, year,
  },
});
