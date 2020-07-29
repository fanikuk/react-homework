import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.scss';
import Header from './components/Header/Header';
import CategoryScreen from './screens/Category/CategoryScreen';
import { PATHS as ROUTES } from './routes/paths';
import LoginForm from './screens/Authorization/LoginForm';
import RegistrationForm from './screens/Registration/RegistrationForm';
import ShoppingCartScreen from './screens/Cart/ShoppingCartScreen';
import DeliveryScreen from './screens/Delivery/DeliveryScreen';
import CardScreen from './screens/Card/CardScreen';
import FinalScreen from './screens/Final/FinalScreen';

class App extends React.PureComponent {
  render() {
    const { accessToCard, accessToDelivery } = this.props;
    return (
      <Router>
        <Header />
        <Switch>
          <Route path={ROUTES.SHOP} component={CategoryScreen} />
          <Route path={ROUTES.REGISTRATION} component={RegistrationForm} />
          <Route path={ROUTES.LOGIN} component={LoginForm} />
          <Route exact path={ROUTES.CART} component={ShoppingCartScreen} />
          <Route
            exact
            path={ROUTES.DELIVERY}
            component={accessToDelivery ? DeliveryScreen : CategoryScreen}
          />
          <Route exact path={ROUTES.CARD} component={accessToCard ? CardScreen : CategoryScreen} />
          <Route exact path={ROUTES.FINAL} component={FinalScreen} />
          <Route path="/" component={CategoryScreen} />
        </Switch>

      </Router>
    );
  }
}

const mapStateToProps = ({ access }) => ({
  accessToCard: access.accessToCard,
  accessToDelivery: access.accessToDelivery,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  accessToCard: PropTypes.bool.isRequired,
  accessToDelivery: PropTypes.bool.isRequired,
};
