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
  let value;

  switch (selectId) {
    case 'start-date':
      ({ startYear: value } = form);
      break;
    case 'end-date':
      ({ endYear: value } = form);
      break;
    default:
      throw new Error('Unsupported select type: ' + selectId);
  }
  return (
    <>
      <select name="yearPicker" value={value} onChange={(e) => handleSelectChange(e, selectId)}>
        <option value="" className="disabled">
          year
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
  form: PropTypes.object.isRequired,
};
export default YearPicker;
