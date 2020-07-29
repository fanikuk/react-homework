import React from 'react';
import PropTypes from 'prop-types';
import './select.scss';

const FormSelect = ({
  name, options = [], selectedValue, onChange,
}) => (
  <select
    name={name}
    value={selectedValue}
    onChange={onChange}
    className="registration-form__select"
  >
    {options.map(({ id, value }) => (
      <option key={id} value={id}>
        {value}
      </option>
    ))}
  </select>
);
export default FormSelect;

FormSelect.defaultProps = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
};
FormSelect.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
};
