import React from 'react';
import PropTypes from 'prop-types';
import MonthYearPicker from '../time-picker/MonthYearPicker';

function StartDate({ handleSelectChange }) {
  return (
    <div className="form-control">
      <label htmlFor="start-date">Start date</label>
      <MonthYearPicker selectId="start-date" handleChange={handleSelectChange} />
    </div>
  );
}

StartDate.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
};

export { StartDate };
