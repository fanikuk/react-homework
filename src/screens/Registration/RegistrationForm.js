import React from 'react';
import './registaration.scss';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Link, withRouter } from 'react-router-dom';
import { GENDER } from '../../components/form/formConstants';
import FormSelect from '../../components/form/elements/FormSelect';
import { ERRORS } from '../../components/form/validationErrors';
import ErrorFootnote from '../../components/form/elements/ErrorFootnote';
import { PATHS as ROUTES } from '../../routes/paths';
import { newUser } from '../../actions/userActions';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(4, ERRORS.EMAIL_MIN)
    .max(256, ERRORS.EMAIL_MAX)
    .matches(/^[a-zA-Z0-9@.']+$/, ERRORS.EMAIL_INCORRECT)
    .email(ERRORS.EMAIL_INCORRECT)
    .required(ERRORS.REQUIRED),
  name: yup
    .string()
    .min(2, ERRORS.NAME_MIN)
    .max(100, ERRORS.NAME_MAX)
    .matches(/^[a-zA-Zа-яА-Я-']+$/, ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),
  surname: yup
    .string()
    .min(2, ERRORS.PASSWORD_MIN)
    .max(100, ERRORS.EMAIL_MAX)
    .matches(/^[a-zA-Zа-яА-Я-']+$/, ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),
  deliveryAddress: yup
    .string()
    .min(5, ERRORS.DATA_INCORRECT)
    .max(256, ERRORS.DATA_INCORRECT)
    .matches(/^[a-zA-Zа-яА-Я0-9- ']+$/, ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),
  birthday: yup
    .date(ERRORS.DATA_INCORRECT)
    .min('1950-02-03', ERRORS.DATE_MIN)
    .max('2004-02-03', ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),
  accept: yup
    .boolean()
    .test(false, ERRORS.CHECKBOX, value => value === true),
});

const RegistrationForm = ({
  // eslint-disable-next-line no-shadow,react/prop-types
  newUser, history,
}) => {
  const initValues = {
    email: '',
    name: '',
    surname: '',
    birthday: '',
    gender: 'Мужской',
    deliveryAddress: '',
    accept: false,
    errors: {
      email: '',
      name: '',
      surname: '',
      birthday: '',
      gender: '',
      deliveryAddress: '',
      accept: false,
    },
  };

  const onSubmit = (value, { resetForm, setSubmitting }) => {
    newUser({
      email: value.email,
      name: value.name,
      surname: value.surname,
      birthday: value.birthday,
      gender: value.gender,
      deliveryAddress: value.deliveryAddress,
    });
    // eslint-disable-next-line react/prop-types
    history.push(ROUTES.LOGIN);
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
          <form className="registration-form" onSubmit={handleSubmit}>
            <h3 className="registration-form__title">Регистрация</h3>
            <label className="registration-form__label">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="registration-form__input"
              />
              <ErrorFootnote error={errors.email} />
            </label>
            <label className="registration-form__label">
              <input
                placeholder="Имя"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="registration-form__input"
              />
              <ErrorFootnote error={errors.name} />
            </label>
            <label className="registration-form__label">
              <input
                placeholder="Фамилия"
                type="text"
                name="surname"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                className="registration-form__input"
              />
              <ErrorFootnote error={errors.surname} />
            </label>
            <label className="registration-form__label">
              <input
                placeholder="Дата рождения"
                type="date"
                name="birthday"
                value={values.birthday}
                onChange={handleChange}
                onBlur={handleBlur}
                className="registration-form__input"
                min="1950-02-03"
                max="2004-02-03"
              />
              <ErrorFootnote error={errors.birthday} />
            </label>
            <label>
              <FormSelect
                name="gender"
                options={GENDER}
                selectedValue={values.gender}
                onChange={handleChange}
              />
            </label>
            <label className="registration-form__label">
              <input
                placeholder="Адрес доставки"
                type="text"
                name="deliveryAddress"
                value={values.deliveryAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                className="registration-form__input"
              />
              <ErrorFootnote error={errors.deliveryAddress} />
            </label>
            <label className="registration-form__field registration-form__agrees">
              <ErrorFootnote error={errors.accept} />
              <br />
              <input
                type="checkbox"
                name="accept"
                value={values.accept}
                checked={values.accept}
                onChange={handleChange}
                className="registration-form__checkbox"
              />
              Я соглашаюсь с
              {' '}
              <span className="registration-form__link">Правилами пользования</span>
              {' '}
              и
              {' '}
              <span className="registration-form__link">Политикой конфиденциальности</span>
            </label>
            <button className="registration-form__button" type="submit" disabled={isSubmitting}>
              Зарегистрироваться
            </button>
            <span className="registration-form__toLogin">Есть аккаунт?</span>
            <Link className="registration-form__align" to={ROUTES.LOGIN}>
              <span
                className="registration-form__link"
              >
                Войти
              </span>
            </Link>
          </form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = ({
  newUser,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationForm));
