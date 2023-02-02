import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ labelName, inputId, inputName, form, handleChange }) {
  const { [inputName]: value } = form;

  return (
    <div className="form-control">
      <label htmlFor={inputId}>{labelName}</label>
      <textarea name={inputName} id={inputId} cols="30" rows="10" value={value} onChange={handleChange} />
    </div>
  );
}

TextArea.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export { TextArea };
