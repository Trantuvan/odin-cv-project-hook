import clsx from 'clsx';
import { useState } from 'react';

import styles from './styles/App.module.css';
import FormToolBar from './components/common/form-tool-bar';
import FormPersonal from './components/personal-form/';
import defaultImg from './imgs/default-avatar.png';

function App() {
  const [personal, setPersonal] = useState(() => ({
    givenName: 'Vander',
    familyName: 'Tran',
    email: 'tran@gmail.com',
    headline: 'Work Hard Play Hard',
    phoneNumber: '0369158125',
    address: '82 297 street Phuoc Long B ward, District 9',
    postalCode: '70000',
    city: 'Ho Chi Minh',
    photoUrl: defaultImg,
  }));

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
          <FormToolBar formName="Personal details" />
          <FormPersonal form={personal} handleChange={handlePersonChange} handlePreview={handlePreviewPhoto} />
        </div>
        {/* <div className={styles.formSection}>
          <FormToolBar formName="Personal details" />
          <FormPersonal form={personal} handleChange={handlePersonChange} />
        </div> */}
      </div>
      <div className={clsx(styles.resumeContainer)}>resume</div>
    </div>
  );
}

export default App;
