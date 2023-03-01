import React from 'react';
import PropTypes from 'prop-types';

function MonthPicker({ selectId, handleSelectChange, form }) {
  let value;

  switch (selectId) {
    case 'start-date':
      ({ startMonth: value } = form);
      break;
    case 'end-date':
      ({ endMonth: value } = form);
      break;
    default:
      throw new Error('Unsupported select type: ' + selectId);
  }
  return (
    <>
      <select name="monthPicker" value={value} onChange={(e) => handleSelectChange(e, selectId)}>
        <option value="" className="disabled">
          month
        </option>
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>
      </select>
    </>
  );
}

MonthPicker.propTypes = {
  selectId: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default MonthPicker;
