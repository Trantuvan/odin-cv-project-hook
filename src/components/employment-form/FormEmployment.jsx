import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uniqid from 'uniqid';

import { EndDate, InputText, StartDate, TextArea } from '../common/form-controls';
import styles from '../../styles/FormEducation.module.css';
import { AiOutlineCheck } from 'react-icons/ai';
import { useEmpArray, ADD, EDIT } from '../../hooks/';

function FormEmployment({ handleToggle, itemIndex, isEdit, handleEditState }) {
  const { state: empArr, dispatch } = useEmpArray();

  function initialized() {
    if (isEdit === true) {
      return empArr.find((item) => item.id === itemIndex);
    }
    return {
      id: uniqid('emp_'),
      position: '',
      employer: '',
      city: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      isPresent: false,
      description: '',
    };
  }
  const [employmentForm, setEmployment] = useState(initialized);

  const handleEmploymentChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setEmployment({
      ...employmentForm,
      [name]: value,
    });
  };

  const handleDateTimeChange = (e, selectId) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (selectId) {
      case 'start-date':
        if (name === 'monthPicker' && value !== 'month') {
          setEmployment({ ...employmentForm, startMonth: value });
        }
        if (name === 'yearPicker' && value !== 'year') {
          setEmployment({ ...employmentForm, startYear: value });
        }
        break;

      case 'end-date':
        if (name === 'monthPicker' && value !== 'month') {
          setEmployment({ ...employmentForm, endMonth: value });
        }
        if (name === 'yearPicker' && value !== 'year') {
          setEmployment({ ...employmentForm, endYear: value });
        }
        break;

      default:
        throw new Error('Unsupported selectId: ' + selectId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit === true) {
      dispatch({ type: EDIT, payload: employmentForm });
      handleEditState(false);
      handleToggle(false);
      return;
    }

    dispatch({ type: ADD, payload: employmentForm });
    setEmployment({
      id: uniqid('edu_'),
      position: '',
      employer: '',
      city: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      isPresent: false,
      description: '',
    });
    handleToggle(false);
  };

  return (
    <form className={clsx('border')} onSubmit={handleSubmit}>
      <div className={clsx(styles.grid2Cols)}>
        <InputText
          labelName="Position"
          inputId="position"
          inputName="position"
          form={employmentForm}
          handleChange={handleEmploymentChange}
        />
        <InputText
          labelName="Employer"
          inputId="employer"
          inputName="employer"
          form={employmentForm}
          handleChange={handleEmploymentChange}
        />
        <InputText
          labelName="City"
          inputId="city"
          inputName="city"
          form={employmentForm}
          handleChange={handleEmploymentChange}
        />
      </div>
      <div className={clsx(styles.gridDateTime)}>
        <StartDate form={employmentForm} handleSelectChange={handleDateTimeChange} />
        <EndDate
          form={employmentForm}
          handleSelectChange={handleDateTimeChange}
          handleChange={handleEmploymentChange}
        />
      </div>
      <TextArea
        labelName="Description"
        inputId="desc"
        inputName="description"
        form={employmentForm}
        handleChange={handleEmploymentChange}
      />
      <button type="submit" className={clsx('btn-primary')}>
        <AiOutlineCheck className={clsx('submit-icon')} /> Done
      </button>
    </form>
  );
}

FormEmployment.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  itemIndex: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleEditState: PropTypes.func.isRequired,
};

export default FormEmployment;
