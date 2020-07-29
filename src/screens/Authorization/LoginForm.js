import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './login.scss';
import { Formik } from 'formik';
import { Link, withRouter } from 'react-router-dom';
import * as yup from 'yup';
import { ERRORS } from '../../components/form/validationErrors';
import ErrorFootnote from '../../components/form/elements/ErrorFootnote';
import { setUser, statusUpdate } from '../../actions/userActions';
import { deliveryAccess } from '../../actions/stepperActions';
import { PATHS as ROUTES } from '../../routes/paths';


const LoginForm = ({
  // eslint-disable-next-line no-shadow,react/prop-types
  setUser, statusUpdate, deliveryAccess, history,
}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.users);
      });
  }, []);

  const initValues = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .min(4, ERRORS.EMAIL_MIN)
      .max(256, ERRORS.EMAIL_MAX)
      .matches(/^[a-zA-Z0-9@.']+$/, ERRORS.EMAIL_INCORRECT)
      .email(ERRORS.EMAIL_INCORRECT)
      .required(ERRORS.REQUIRED),
    password: yup
      .string()
      .min(6, ERRORS.PASSWORD_MIN)
      .max(256, ERRORS.EMAIL_MAX)
      .matches(/^[a-zA-Z0-9_']+$/, ERRORS.PASSWORD_INCORRECT)
      .required(ERRORS.REQUIRED),
  });

  const onSubmit = (value, { resetForm, setSubmitting }) => {
    const user = users.find(item => item.email === value.email && item.password && value.password);
    if (users.includes(user)) {
      console.log(user);
      setUser(user);
      statusUpdate();
      deliveryAccess();
      // eslint-disable-next-line react/prop-types
      history.push(ROUTES.CATEGORY);
    } else console.log('not ok');
    setSubmitting(false);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="login-form__title">Авторизация</h3>
            <div className="login-form__elementsLayout">
              <ErrorFootnote error={errors.email} />
              <input
                placeholder="E-mail"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="login-form__input"
              />
              <ErrorFootnote error={errors.password} />
              <input
                placeholder="Пароль"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="login-form__input"
              />
              <button className="login-form__button" type="submit" disabled={isSubmitting}>Войти</button>
            </div>

            <div className="login-form__links">
              <Link className="login-form__link" to="/shop">Назад</Link>
              <Link className="login-form__link" to="/registration">Регистрация</Link>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = ({ user, access }) => ({
  status: user.status,
  accessToDelivery: access.accessToDelivery,
});

const mapDispatchToProps = ({
  setUser,
  statusUpdate,
  deliveryAccess,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
  statusUpdate: PropTypes.func.isRequired,
  deliveryAccess: PropTypes.func.isRequired,
};
