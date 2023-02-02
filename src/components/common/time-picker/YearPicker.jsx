import React from 'react';
import PropTypes from 'prop-types';

const generateYears = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = 1963; i <= currentYear; i++) {
    years.push(i);
  }
  return years.reverse();
};

function YearPicker({ selectId, handleSelectChange, form }) {
  const yearArray = generateYears();
  let isPresent;
  if (form !== undefined) {
    ({ isPresent } = form);
  }
  return (
    <>
      <select
        name="yearPicker"
        defaultValue="year"
        onChange={(e) => handleSelectChange(e, selectId)}
        disabled={!isPresent ? false : true}
      >
        <option value="year" disabled>
          Year
        </option>
        {yearArray.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
}

YearPicker.propTypes = {
  selectId: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  form: PropTypes.object,
};
export default YearPicker;
