import React from 'react';
import PropTypes from 'prop-types';
import { MonthPicker } from '../time-picker/MonthPicker';

function StartDate({ handleSelectChange }) {
  return (
    <div className="form-control">
      <label htmlFor="start-date">Start date</label>
      <MonthPicker selectId="start-date" selectName="startDate" handleSelectChange={handleSelectChange} />
    </div>
  );
}

StartDate.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
};

export { StartDate };
