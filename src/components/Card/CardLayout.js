import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ERRORS } from '../form/validationErrors';
import './cardLayout.scss';
import { PATHS as ROUTES } from '../../routes/paths';
import ErrorFootnote from '../form/elements/ErrorFootnote';
import { setCard } from '../../actions/cardActions';
import { clean } from '../../actions/shoppingCartActions';

const validationSchema = yup.object().shape({
  name: yup
    .string(ERRORS.DATA_INCORRECT)
    .min(2, ERRORS.DATA_INCORRECT)
    .max(255, ERRORS.DATA_INCORRECT)
    .matches(/^[a-zA-Z- ']+$/, ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),
  number: yup
    .string(ERRORS.DATA_INCORRECT)
    .min(16, ERRORS.DATA_INCORRECT)
    .max(16, ERRORS.DATA_INCORRECT)
    .matches(/^[0-9']+$/, ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),
  cv2: yup
    .string(ERRORS.DATA_INCORRECT)
    .min(3, ERRORS.DATA_INCORRECT)
    .matches(/^[0-9']+$/, ERRORS.DATA_INCORRECT)
    .max(4, ERRORS.DATA_INCORRECT),
  month: yup
    .string(ERRORS.DATA_INCORRECT)
    .min(2, ERRORS.DATA_INCORRECT)
    .max(2, ERRORS.DATA_INCORRECT)
    .matches(/^[0-9']+$/, ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),
  year: yup
    .string(ERRORS.DATA_INCORRECT)
    .min(2, ERRORS.DATA_INCORRECT)
    .max(2, ERRORS.DATA_INCORRECT)
    .matches(/^[0-9']+$/, ERRORS.DATA_INCORRECT)
    .required(ERRORS.REQUIRED),

});

class CardLayout extends React.Component {
    initValues = {
      name: '',
      number: '',
      cv2: '',
      month: '',
      year: '',
      errors: {
        name: '',
        number: '',
        cv2: '',
        month: '',
        year: '',
      },
    };

    onSubmit = (values, { setSubmitting, resetForm }) => {
      // eslint-disable-next-line no-shadow
      const { setCard, clean } = this.props;
      setSubmitting(false);
      resetForm();
      setCard(values);
      clean();
      // eslint-disable-next-line react/destructuring-assignment,react/prop-types
      this.props.history.push(ROUTES.FINAL);
    };

    render() {
      return (
        <div className="card">
          <h3 className="card__title">Ввод карты</h3>
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
              <form onSubmit={handleSubmit} className="card__form">
                <label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Имя на карте"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="card__input card__name"
                  />
                  <ErrorFootnote error={errors.name} />
                </label>
                <label>
                  <input
                    type="text"
                    name="number"
                    value={values.number}
                    placeholder="Номер карты"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="card__input card__number"
                  />
                  <ErrorFootnote error={errors.number} />
                </label>
                <label>
                  <input
                    type="text"
                    name="cv2"
                    value={values.cv2}
                    placeholder="Код безопасности"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="card__input card__cv2"
                  />
                  <ErrorFootnote error={errors.cv2} />
                </label>
                <label>
                  <input
                    type="text"
                    name="month"
                    value={values.month}
                    placeholder="Дата истечения(ММ)"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="card__input card__month"
                  />
                  <ErrorFootnote error={errors.month} />
                </label>
                <label>
                  <input
                    type="text"
                    name="year"
                    value={values.year}
                    placeholder="Дата истечения(ГГ)"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="card__input card__year"
                  />
                  <ErrorFootnote error={errors.year} />
                </label>
                <div className="card__buttons">
                  <Link className="card__link" to={ROUTES.DELIVERY}>Назад</Link>
                  <button className="card__link" type="submit">Продолжить</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      );
    }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = ({
  setCard,
  clean,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardLayout));

CardLayout.propTypes = {
  setCard: PropTypes.func.isRequired,
  clean: PropTypes.func.isRequired,
};
