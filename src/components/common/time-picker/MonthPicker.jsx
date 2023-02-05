import React from 'react';
import PropTypes from 'prop-types';

function MonthPicker({ selectId, handleSelectChange, form }) {
  let isPresent;
  let value;
  if (form !== undefined) {
    ({ isPresent } = form);

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
  }
  return (
    <>
      <select
        name="monthPicker"
        // defaultValue="month"
        value={value}
        onChange={(e) => handleSelectChange(e, selectId)}
        disabled={!isPresent ? false : true}
      >
        <option value="month" disabled>
          Month
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
  form: PropTypes.object,
};

export default MonthPicker;
