import React from 'react';
import './cartLayout.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItemsList from '../CartItemsList/CartItemsList';
import {
  incrementCount, decrementCount, deleteItem,
} from '../../../actions/shoppingCartActions';
import { PATHS as ROUTES } from '../../../routes/paths';

// проверка на авторизацию
class CartLayout extends React.PureComponent {
  render() {
    const {
      // eslint-disable-next-line no-shadow
      incrementCount, decrementCount, deleteItem, shoppingCart, accessToDelivery,
    } = this.props;
    return (
      <div className="cart">
        <h3 className="cart__title">Корзина</h3>
        <CartItemsList
          cart={shoppingCart}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDelete={deleteItem}
        />
        {shoppingCart.length > 0 ? (
          <div className="cart__button-container">
            <span className="cart__amount">
              Цена:
              {' '}
              {shoppingCart.map(item => item.cost * item.count).reduce((prev, next) => prev + next)}
              {' '}
              руб
            </span>
            <Link className="cart__next" to={accessToDelivery ? ROUTES.DELIVERY : ROUTES.LOGIN}>Продолжить</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCart, access }) => ({
  shoppingCart: shoppingCart.shoppingCart,
  accessToDelivery: access.accessToDelivery,
});

const mapDispatchToProps = ({
  incrementCount,
  decrementCount,
  deleteItem,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartLayout);

CartLayout.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  accessToDelivery: PropTypes.bool.isRequired,
};
