import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './stepper.scss';
import { Link } from 'react-router-dom';
import { cardDisableAccess, deliveryDisableAccess } from '../../actions/stepperActions';
import { PATHS as ROUTES } from '../../routes/paths';

class Stepper extends React.PureComponent {
  render() {
    const {
      shoppingCart, accessToCard, accessToDelivery,
    } = this.props;
    const leftPoint = shoppingCart.length > 0 ? 'stepper__point _active' : 'stepper__point _disabled';
    const centerPoint = accessToDelivery && shoppingCart.length > 0
      ? 'stepper__point _active' : 'stepper__point _disabled';
    const rightPoint = accessToCard && shoppingCart.length > 0
      ? 'stepper__point _active' : 'stepper__point _disabled';
    return (
      <div className="stepper">
        <Link to={ROUTES.CART}><div className={leftPoint} /></Link>
        <Link to={ROUTES.DELIVERY}><div className={centerPoint} /></Link>
        <Link to={ROUTES.CARD}><div className={rightPoint} /></Link>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCart, access }) => ({
  shoppingCart: shoppingCart.shoppingCart,
  accessToCard: access.accessToCard,
  accessToDelivery: access.accessToDelivery,
});

const mapDispatchToProps = ({
  deliveryDisableAccess,
  cardDisableAccess,
});

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);

Stepper.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  accessToDelivery: PropTypes.bool.isRequired,
  accessToCard: PropTypes.bool.isRequired,
};
