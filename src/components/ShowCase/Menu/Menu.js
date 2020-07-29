import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './menu.scss';

class Menu extends React.PureComponent {
  render() {
    const { location } = this.props;
    const currentPath = location.pathname;
    return (
      <div className="menu">
        <Link
          className={currentPath.search('/shop/category/phones') ? 'menu__link' : 'menu__link _active'}
          to="/shop/category/phones"
        >
          Телефоны
        </Link>
        <Link
          className={currentPath.search('/shop/category/tablets') ? 'menu__link' : 'menu__link _active'}
          to="/shop/category/tablets"
        >
          Планшеты
        </Link>
        <Link
          className={currentPath.search('/shop/category/accessories') ? 'menu__link' : 'menu__link _active'}
          to="/shop/category/accessories"
        >
          Аксессуары
        </Link>
      </div>
    );
  }
}
export default withRouter(Menu);
