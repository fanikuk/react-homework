/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Link, withRouter } from 'react-router-dom';
import { ERRORS } from '../../form/validationErrors';
import './deliveryLayout.scss';
import { PATHS as ROUTES } from '../../../routes/paths';

import ErrorFootnote from '../../form/elements/ErrorFootnote';
import { cardAccess } from '../../../actions/stepperActions';
import { setDelivery, setPhone } from '../../../actions/deliveryActions';

const validationSchema = yup.object().shape({
  newDeliveryAddress: yup
    .string()
    .min(5, ERRORS.DATA_INCORRECT)
    .max(256, ERRORS.DATA_INCORRECT)
    .matches(/^[a-zA-Zа-яА-Я0-9- ']+$/, ERRORS.DATA_INCORRECT),
  phone: yup
    .string(ERRORS.PHONE_INCORRECT)
    .matches(/^[0-9]+$/, ERRORS.PHONE_INCORRECT)
    .min(11, ERRORS.PHONE_LENGTH)
    .max(11, ERRORS.PHONE_LENGTH),
});

class DeliveryLayout extends React.PureComponent {
  initValues = {
    deliveryAddress: this.props.deliveryAddress,
    newDeliveryAddress: '',
    radio: '',
    phone: this.props.phone,
    errors: {
      deliveryAddress: '',
      phone: '',
    },
  };

  onSubmit = (value, { setSubmitting, resetForm }) => {
    // eslint-disable-next-line no-shadow
    const { setDelivery, setPhone } = this.props;
    if (value.radio === '2') setDelivery(value.newDeliveryAddress);
    else setDelivery(value.deliveryAddress);
    setPhone(value.phone);
    setSubmitting(false);
    resetForm();
    this.props.cardAccess();
    // eslint-disable-next-line react/prop-types
    this.props.history.push(ROUTES.CARD);
  };

  render() {
    return (
      <div className="delivery">
        <h3 className="delivery__title">Доставка</h3>
        <Formik
          initialValues={this.initValues}
          validationSchema={validationSchema}
          onSubmit={this.onSubmit}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="delivery__form">
              <label className="delivery__radio-card">
                <input
                  type="radio"
                  name="radio"
                  id="deliveryAddress"
                  value="1"
                  defaultChecked
                  onChange={handleChange}
                />
                <div className="delivery__radio-description">
                  <span>Доставка до дома</span>
                  <span className="delivery__bottom-el">{values.deliveryAddress}</span>
                </div>
              </label>
              <label className="delivery__radio-card">
                <input
                  type="radio"
                  name="radio"
                  id="newDeliveryAddress"
                  value="2"
                  onChange={handleChange}
                />
                <div className="delivery__radio-description">
                  <span>Другой адрес</span>
                  <input
                    className="delivery__input delivery__bottom-el"
                    type="text"
                    name="newDeliveryAddress"
                    placeholder={values.radio !== '2' ? '' : 'Новый адрес'}
                    disabled={values.radio !== '2'}
                    value={values.radio === '2' ? values.newDeliveryAddress : ''}
                    onChange={handleChange}
                  />
                  {values.radio === '2' ? (<ErrorFootnote error={errors.newDeliveryAddress} />) : null}
                </div>
              </label>
              <label>
                Телефон:
                {' '}
                <input
                  className="delivery__input delivery__phone"
                  type="text"
                  name="phone"
                  placeholder={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <ErrorFootnote error={errors.phone} />
              </label>
              <div className="delivery__buttons">
                <Link className="delivery__link" to={ROUTES.CART}>Назад</Link>
                <button className="delivery__link" type="submit">Продолжить</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = ({ user, access }) => ({
  deliveryAddress: user.deliveryAddress,
  accessToCard: access.accessToCard,
  phone: user.phone,
});

const mapDispatchToProps = ({
  cardAccess,
  setPhone,
  setDelivery,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeliveryLayout));

DeliveryLayout.propTypes = {
  deliveryAddress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cardAccess: PropTypes.func.isRequired,
  setDelivery: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
};
