import React from 'react';
import PropTypes from 'prop-types';
import './itemCard.scss';
import { connect } from 'react-redux';

class ItemCard extends React.Component {
    onAddHandler = () => {
      const {
        title, imgUrl, cost, onAdd, increment, cart, id,
      } = this.props;
      if (cart.length < 1 || cart.map(item => item.id).indexOf(id) === -1) {
        onAdd({
          id, title, imgUrl, cost,
        });
      } else {
        increment(id);
      }
    };

    render() {
      const { title, imgUrl, cost } = this.props;
      return (
        <div className="item">
          <span className="item__name">{title}</span>
          <img className="item__image" src={imgUrl} alt={title} />
          <span className="item__price">
            { cost }
            Р
          </span>
          <button onClick={this.onAddHandler} type="button" className="item__add">Добавить</button>
        </div>
      );
    }
}


ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart: shoppingCart.shoppingCart,
});

export default connect(mapStateToProps)(ItemCard);
