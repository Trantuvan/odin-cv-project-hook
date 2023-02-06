import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from '../../styles/CVHorizontal.module.css';
import { useEduArray, useEmpArray } from '../../hooks';

function CVHorizontal({
  personalDetails: { city, postalCode, address, givenName, familyName, phoneNumber, email, headline, photoUrl },
}) {
  const { state: eduArr } = useEduArray();
  const { state: empArr } = useEmpArray();

  return (
    <div className={clsx(styles.resume)}>
      <div className={clsx(styles.resumeHeader)} />
      <div className={clsx(styles.resumeContent)}>
        <div className={clsx(styles.resumeContentHero)}>
          <h1>{`${givenName} ${familyName}`}</h1>
          <p>{headline}</p>
        </div>
        <div className={clsx(styles.resumeContentNav)}>
          <img src={photoUrl} alt="user-avatar" />
          <h3 className={clsx(styles.sectionTitle)}>Personal details</h3>
          <div className={clsx(styles.personalContainer)}>
            <h4>Name</h4>
            <p>{`${givenName} ${familyName}`}</p>
          </div>
          <div className={clsx(styles.personalContainer)}>
            <h4>Email Address</h4>
            <p>{`${email}`}</p>
          </div>
          <div className={clsx(styles.personalContainer)}>
            <h4>Phone</h4>
            <p>{`${phoneNumber}`}</p>
          </div>
          <div className={clsx(styles.personalContainer)}>
            <h4>Address</h4>
            <p>{`${address}, ${postalCode}, ${city}`}</p>
          </div>
        </div>
        <div className={clsx(styles.resumeContentMain)}></div>
      </div>
      <div className={clsx(styles.resumeFooter)} />
    </div>
  );
}

CVHorizontal.propTypes = {
  personalDetails: PropTypes.object.isRequired,
};

export default CVHorizontal;
