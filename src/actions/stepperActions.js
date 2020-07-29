import { STEPPER_ACTIONS } from './constants';


export const deliveryAccess = () => ({
  type: STEPPER_ACTIONS.DELIVERY_ACCESS,
});

export const deliveryDisableAccess = () => ({
  type: STEPPER_ACTIONS.DELIVERY_DISABLE_ACCESS,
});

export const cardAccess = () => ({
  type: STEPPER_ACTIONS.CARD_ACCESS,
});

export const cardDisableAccess = () => ({
  type: STEPPER_ACTIONS.CARD_DISABLE_ACCESS,
});
