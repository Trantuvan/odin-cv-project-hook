import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';
import styles from '../../../styles/MonthYearPicker.module.css';

function MonthYearPicker({ selectId, handleChange, form }) {
  const { isPresent } = form;
  return (
    <div
      className={clsx(styles.monthYearContainer, { [styles.disabled]: selectId === 'end-date' && isPresent === true })}
    >
      <MonthPicker selectId={selectId} handleSelectChange={handleChange} form={form} />
      <YearPicker selectId={selectId} handleSelectChange={handleChange} form={form} />
    </div>
  );
}

MonthYearPicker.propTypes = {
  selectId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default MonthYearPicker;
