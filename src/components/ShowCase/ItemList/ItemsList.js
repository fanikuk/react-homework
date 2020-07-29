import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/ItemCard';
import './itemsList.scss';

const ItemsList = ({
  items = [], onAdd, increment, cart,
}) => (
  <>
    <div className={items.length > 0 ? 'items-list' : 'empty-list'}>
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            cost={item.cost}
            increment={increment}
            cart={cart}
            onAdd={onAdd}
            id={item.id}
          />
        ))
      ) : (
        <span className="empty-list__empty">Товары отсутвуют</span>
      )}

    </div>
  </>
);
export default ItemsList;

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
