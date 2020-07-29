import React from 'react';
import Stepper from '../../components/stepper/Stepper';
import CartLayout from '../../components/ShoppingCart/ShoppingCartLayout/CartLayout';


class ShoppingCartScreen extends React.PureComponent {
  render() {
    return (
      <>
        <Stepper />
        <CartLayout />
      </>
    );
  }
}
export default ShoppingCartScreen;
