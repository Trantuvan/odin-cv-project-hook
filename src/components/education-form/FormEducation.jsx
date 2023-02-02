import React, { useState } from 'react';

import { InputText, StartDate, TextArea } from '../common/form-controls';
import styles from '../../styles/FormEducation.module.css';
import clsx from 'clsx';

function FormEducation() {
  const [educationForm, setEducation] = useState(() => ({
    education: 'Bachelor of Industrial Engineering System',
    school: 'International University of HCM city',
    city: 'HCM city',
    startDate: '',
    endDate: '',
    isPresent: false,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aspernatur incidunt possimus aperiam dolorem alias voluptatibus accusantium exercitationem ab repellendus?',
  }));

  const handleEducationChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEducation({
      ...educationForm,
      [name]: value,
    });
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
      <StartDate form={educationForm} handleSelectChange={handleEducationChange} />
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
