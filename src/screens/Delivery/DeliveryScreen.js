import React from 'react';
import { connect } from 'react-redux';
import Stepper from '../../components/stepper/Stepper';
import DeliveryLayout from '../../components/Delivery/DeliveryLayout/DeliveryLayout';

class DeliveryScreen extends React.PureComponent {
  render() {
    return (
      <>
        <Stepper />
        <DeliveryLayout />
      </>
    );
  }
}

const mapStateToProps = ({ shoppingCart, access }) => ({
  shoppingCart: shoppingCart.shoppingCart,
});

export default connect(mapStateToProps)(DeliveryScreen);
