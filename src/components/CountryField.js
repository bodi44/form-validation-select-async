import React from 'react';

const CountryField = ({ field }) => {
  return (
    <select {...field}>
      <option value="Ukraine">Ukraine</option>
      <option value="Poland">Poland</option>
      <option value="USA">USA</option>
      <option value="United Kingdom">United Kingdom</option>
    </select>
  );
};

export default CountryField;
