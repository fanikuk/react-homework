import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemsList from '../ItemList/ItemsList';
import Search from '../Search/Search';
import { addItem, incrementCount } from '../../../actions/shoppingCartActions';

class ItemsLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  onAdd = () => {}; // есть в редюсере

  render() {
    const { search } = this.state;
    const {
      // eslint-disable-next-line no-shadow
      items, addItem, incrementCount, shoppingCart,
    } = this.props;
    const searchedItems = items.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <>
        <Search search={search} handleChange={this.handleChange} />
        <ItemsList
          onAdd={addItem}
          increment={incrementCount}
          cart={shoppingCart}
          items={searchedItems}
        />
      </>
    );
  }
}

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart: shoppingCart.shoppingCart,
});

const mapDispatchToProps = ({
  addItem,
  incrementCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsLayout);

ItemsLayout.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
