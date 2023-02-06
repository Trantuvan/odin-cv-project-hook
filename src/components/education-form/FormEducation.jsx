import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uniqid from 'uniqid';

import { EndDate, InputText, StartDate, TextArea } from '../common/form-controls';
import styles from '../../styles/FormEducation.module.css';
import { AiOutlineCheck } from 'react-icons/ai';
import { useEduArray, ADD, EDIT } from '../../hooks/useEduArray';

function FormEducation({ handleToggle, itemIndex, isEdit, handleEditState }) {
  const { state: eduArr, dispatch } = useEduArray();

  function initialized() {
    if (isEdit === true) {
      return eduArr.find((item) => item.id === itemIndex);
    }
    return {
      id: uniqid('edu_'),
      education: '',
      school: '',
      city: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      isPresent: false,
      description: '',
    };
  }
  const [educationForm, setEducation] = useState(initialized);

  const handleEducationChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setEducation({
      ...educationForm,
      [name]: value,
    });
  };

  const handleDateTimeChange = (e, selectId) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (selectId) {
      case 'start-date':
        if (name === 'monthPicker' && value !== 'month') {
          setEducation({ ...educationForm, startMonth: value });
        }
        if (name === 'yearPicker' && value !== 'year') {
          setEducation({ ...educationForm, startYear: value });
        }
        break;

      case 'end-date':
        if (name === 'monthPicker' && value !== 'month') {
          setEducation({ ...educationForm, endMonth: value });
        }
        if (name === 'yearPicker' && value !== 'year') {
          setEducation({ ...educationForm, endYear: value });
        }
        break;

      default:
        throw new Error('Unsupported selectId: ' + selectId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit === true) {
      dispatch({ type: EDIT, payload: educationForm });
      handleEditState(false);
      handleToggle(false);
      return;
    }

    dispatch({ type: ADD, payload: educationForm });
    setEducation({
      id: uniqid('edu_'),
      education: '',
      school: '',
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
          labelName="Education"
          inputId="education"
          inputName="education"
          form={educationForm}
          handleChange={handleEducationChange}
        />
        <InputText
          labelName="School"
          inputId="school"
          inputName="school"
          form={educationForm}
          handleChange={handleEducationChange}
        />
        <InputText
          labelName="City"
          inputId="city"
          inputName="city"
          form={educationForm}
          handleChange={handleEducationChange}
        />
      </div>
      <div className={clsx(styles.gridDateTime)}>
        <StartDate form={educationForm} handleSelectChange={handleDateTimeChange} />
        <EndDate form={educationForm} handleSelectChange={handleDateTimeChange} handleChange={handleEducationChange} />
      </div>
      <TextArea
        labelName="Description"
        inputId="desc"
        inputName="description"
        form={educationForm}
        handleChange={handleEducationChange}
      />
      <button type="submit" className={clsx('btn-primary')}>
        <AiOutlineCheck className={clsx('submit-icon')} /> Done
      </button>
    </form>
  );
}

FormEducation.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  itemIndex: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleEditState: PropTypes.func.isRequired,
};

export default FormEducation;
