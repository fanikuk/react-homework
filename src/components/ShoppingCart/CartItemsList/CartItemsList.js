import React from 'react';
import PropTypes from 'prop-types';
import './cartItemsList.scss';
import ItemCart from '../ItemCart/ItemCart';

const CartItemsList = ({
  cart = [], onIncrement, onDecrement, onDelete,
}) => (
  <>
    <div className={cart.length > 0 ? 'cartItems' : 'center'}>

      {cart.length > 0 ? (
        cart.map(item => (
          <ItemCart
            key={item.id}
            id={item.id}
            count={item.count}
            imgUrl={item.imgUrl}
            title={item.title}
            cost={item.cost}
            increment={onIncrement}
            decrement={onDecrement}
            deleteItem={onDelete}
          />
        ))


      ) : (
        <span className="center__cartEmpty">Ваша корзина пуста</span>
      )}
    </div>

  </>
);
export default CartItemsList;

CartItemsList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
