import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../../components/ShowCase/Menu/Menu';
import { PATHS as ROUTES } from '../../routes/paths';
import ItemsLayout from '../../components/ShowCase/ItemsLayout/ItemsLayout';

class CategoryScreen extends React.PureComponent {
  render() {
    const { phones, tablets, accessories } = this.props;
    return (
      <>
        <Menu />
        <Switch>
          <Route path={ROUTES.PHONES}>
            <ItemsLayout items={phones} />
          </Route>
          <Route path={ROUTES.TABLETS}>
            <ItemsLayout items={tablets} />
          </Route>
          <Route path={ROUTES.ACCESSORIES}>
            <ItemsLayout items={accessories} />
          </Route>
          <Route>
            <Redirect to={ROUTES.TABLETS} />
          </Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ items }) => ({
  phones: items.phones,
  accessories: items.accessories,
  tablets: items.tablets,
});

export default connect(mapStateToProps)(CategoryScreen);

CategoryScreen.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  tablets: PropTypes.arrayOf(PropTypes.object).isRequired,
  accessories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
