import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PATHS as ROUTES } from '../../routes/paths';

class Header extends React.PureComponent {
  render() {
    const {
      shoppingCart, name, surname, status,
    } = this.props;
    console.log(shoppingCart);
    // console.log(status);
    return (
      <div className="header">
        <div>
          <Link to={ROUTES.TABLETS}>
            <span className="header__logo">Online-shop</span>
          </Link>
        </div>
        <div className="header__right-side">
          <Link to={ROUTES.CART} className="header__cart-block">
            <span className="header__cart-length">{shoppingCart.length}</span>
            <img
              className="header__cart"
              src="https://image.flaticon.com/icons/svg/1170/1170576.svg"
              alt="shoppingCart"
            />
          </Link>
          <Link to={ROUTES.LOGIN}>
            <span className="header__user">{status === false ? ('Гость') : (`${name} ${surname}`)}</span>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <img
              className="header__avatar"
              src="https://image.flaticon.com/icons/svg/1385/1385955.svg"
              alt="avatar"
            />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCart, user }) => ({
  shoppingCart: shoppingCart.shoppingCart,
  name: user.name,
  surname: user.surname,
  status: user.status,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  // user: PropTypes.object.isRequired,
};
