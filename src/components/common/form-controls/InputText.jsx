import PropTypes from 'prop-types';

function InputText({ labelName, inputId, inputName, form, handleChange }) {
  const { [inputName]: value } = form;

  return (
    <div className="form-control">
      <label htmlFor={inputId}>{labelName}</label>
      <input type="text" name={inputName} id={inputId} value={value} onChange={handleChange} />
    </div>
  );
}

InputText.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export { InputText };
