import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import MonthYearPicker from '../time-picker/MonthYearPicker';
import styles from '../../../styles/EndDate.module.css';

function EndDate({ handleSelectChange, handleChange, form }) {
  return (
    <div className="form-control">
      <div className={clsx(styles.checkboxContainer)}>
        <label htmlFor="end-date">End date</label>
        <div className={clsx(styles.checkboxFormControl)}>
          <input type="checkbox" name="isPresent" id="present" onChange={handleChange} />
          <label htmlFor="present">Present</label>
        </div>
      </div>
      <MonthYearPicker selectId="end-date" handleChange={handleSelectChange} form={form} />
    </div>
  );
}

EndDate.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export { EndDate };
