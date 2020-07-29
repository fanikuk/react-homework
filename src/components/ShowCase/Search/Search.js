import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';


const Search = ({ handleChange }) => (
  <>
    <input type="text" onChange={handleChange} className="search" placeholder="Поиск" />
  </>
);

export default Search;

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
