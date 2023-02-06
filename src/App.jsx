import clsx from 'clsx';
import { useRef, useState } from 'react';

import styles from './styles/App.module.css';
import FormToolBar from './components/common/form-tool-bar';
import FormPersonal from './components/personal-form/';
import defaultImg from './imgs/default-avatar.png';
import { useToggle } from './hooks/useToggle';
import FormEducation from './components/education-form/';
import FormEmployment from './components/employment-form/';
import FormWrapper from './components/common/form-array-wrapper/FormWrapper';
import { useEduArray, useEmpArray } from './hooks/';
import ListArr from './components/common/list-arr/ListArr';
import CVHorizontal from './components/cv-template/';
import { AiFillFilePdf } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [personal, setPersonal] = useState(() => ({
    givenName: '',
    familyName: '',
    email: '',
    headline: '',
    phoneNumber: '',
    address: '',
    postalCode: '',
    city: '',
    photoUrl: defaultImg,
  }));

  const {
    state: { showForm1, showForm2, showForm3 },
  } = useToggle();

  const { state: eduArr, dispatch: eduDispatch } = useEduArray();
  const { state: empArr, dispatch: empDispatch } = useEmpArray();

  const toPdfRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => toPdfRef.current,
    documentTitle: 'resume generating',
  });

  function handlePersonChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPersonal({ ...personal, [name]: value });
  }

  function handlePreviewPhoto(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPersonal({ ...personal, photoUrl: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className={clsx(styles.grid2Cols)}>
      <div className={clsx(styles.formContainer)}>
        <div className={styles.formSection}>
          <FormToolBar formName="Personal details" formNumber={1} isOpen={showForm1} />
          {showForm1 && (
            <FormPersonal form={personal} handleChange={handlePersonChange} handlePreview={handlePreviewPhoto} />
          )}
        </div>
        <div className={styles.formSection}>
          <FormToolBar formName="Education" formNumber={2} isOpen={showForm2} />
          {showForm2 && (
            <FormWrapper
              formName="Education"
              FormTemplate={FormEducation}
              listArray={<ListArr listArr={eduArr} dispatch={eduDispatch} defaultText="[Education]" />}
            />
          )}
        </div>
        <div className={styles.formSection}>
          <FormToolBar formName="Employment" formNumber={3} isOpen={showForm2} />
          {showForm3 && (
            <FormWrapper
              formName="Employment"
              FormTemplate={FormEmployment}
              listArray={<ListArr listArr={empArr} dispatch={empDispatch} defaultText="[Employment]" />}
            />
          )}
        </div>
        <button type="button" className={clsx('btn-primary')} onClick={handlePrint}>
          <AiFillFilePdf className={clsx('submit-icon')} /> Download
        </button>
      </div>
      <div className={clsx(styles.resumeContainer)}>
        <CVHorizontal personalDetails={personal} ref={toPdfRef} />
      </div>
    </div>
  );
}

export default App;
