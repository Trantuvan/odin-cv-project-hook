import React, { useState } from 'react';
import clsx from 'clsx';

import { EndDate, InputText, StartDate, TextArea } from '../common/form-controls';
import styles from '../../styles/FormEducation.module.css';

function FormEducation() {
  const [educationForm, setEducation] = useState(() => ({
    education: 'Bachelor of Industrial Engineering System',
    school: 'International University of HCM city',
    city: 'HCM city',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    isPresent: false,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aspernatur incidunt possimus aperiam dolorem alias voluptatibus accusantium exercitationem ab repellendus?',
  }));

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

  return (
    <>
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
        <StartDate handleSelectChange={handleDateTimeChange} />
        <EndDate form={educationForm} handleSelectChange={handleDateTimeChange} handleChange={handleEducationChange} />
      </div>
      <TextArea
        labelName="Description"
        inputId="desc"
        inputName="description"
        form={educationForm}
        handleChange={handleEducationChange}
      />
    </>
  );
}

export default FormEducation;
