import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, InputText } from '../common/form-controls';

function FormPersonal({ form, handleChange, handlePreview }) {
  return (
    <form>
      <Avatar form={form} handlePreview={handlePreview} />
      <InputText
        labelName="Given Name"
        inputId="given-name"
        inputName="givenName"
        form={form}
        handleChange={handleChange}
      />
      <InputText
        labelName="Family Name"
        inputId="family-name"
        inputName="familyName"
        form={form}
        handleChange={handleChange}
      />
      <InputText
        labelName="Email Address"
        inputId="email-address"
        inputName="email"
        form={form}
        handleChange={handleChange}
      />
      <InputText labelName="Headline" inputId="headline" inputName="headline" form={form} handleChange={handleChange} />
      <InputText labelName="Address" inputId="address" inputName="address" form={form} handleChange={handleChange} />
      <InputText
        labelName="Postal code"
        inputId="postalCode"
        inputName="postalCode"
        form={form}
        handleChange={handleChange}
      />
      <InputText labelName="City" inputId="city" inputName="city" form={form} handleChange={handleChange} />
    </form>
  );
}

FormPersonal.propTypes = {
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePreview: PropTypes.func.isRequired,
};
export default FormPersonal;
