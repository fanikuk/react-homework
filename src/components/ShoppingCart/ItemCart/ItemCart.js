import React from 'react';
import PropTypes from 'prop-types';
import './itemCart.scss';

class ItemCart extends React.Component {
  onIncrementHandler = () => {
    const { id, increment } = this.props;
    increment(id);
  };

  onDecrementHandler = () => {
    const {
      id, decrement, deleteItem, count,
    } = this.props;
    if (count < 2) deleteItem(id);
    else decrement(id);
  };

  onDeleteHandler = () => {
    const { id, deleteItem } = this.props;
    deleteItem(id);
  };

  render() {
    const {
      imgUrl, title, cost, count,
    } = this.props;
    return (
      <div className="cartItem">
        <div className="cartItem__left">
          <img src={imgUrl} alt={title} className="cartItem__image" />
          <span className="cartItem__title">{title}</span>
        </div>
        <div className="cartItem__center">
          <button type="button" onClick={this.onDecrementHandler} className="cartItem__button">-</button>
          <button type="button" onClick={this.onIncrementHandler} className="cartItem__button">+</button>
          <span className="cartItem__count">
            {count}
            x
          </span>
        </div>
        <span className="cartItem__cost">
          {cost * count}
          {' '}
          руб
        </span>
        <button type="button" onClick={this.onDeleteHandler} className="cartItem__delete">Удалить</button>
      </div>
    );
  }
}

export default ItemCart;

ItemCart.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
