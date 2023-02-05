import React from 'react';
import PropTypes from 'prop-types';
import MonthYearPicker from '../time-picker/MonthYearPicker';

function StartDate({ handleSelectChange, form }) {
  return (
    <div className="form-control">
      <label htmlFor="start-date">Start date</label>
      <MonthYearPicker form={form} selectId="start-date" handleChange={handleSelectChange} />
    </div>
  );
}

StartDate.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export { StartDate };
