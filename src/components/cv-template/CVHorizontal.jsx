/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from '../../styles/CVHorizontal.module.css';
import { useEduArray, useEmpArray } from '../../hooks';

const CVHorizontal = forwardRef(
  (
    { personalDetails: { city, postalCode, address, givenName, familyName, phoneNumber, email, headline, photoUrl } },
    ref,
  ) => {
    const { state: eduArr } = useEduArray();
    const { state: empArr } = useEmpArray();

    const educationList = eduArr.map((eduItem) => {
      const sDate =
        eduItem.startMonth.trim().length === 0 || eduItem.startYear.trim().length === 0
          ? null
          : `${eduItem.startMonth} ${eduItem.startYear}`;
      let eDate;

      if (eduItem.isPresent === true) {
        eDate = 'Present';
      } else {
        eDate =
          eduItem.endMonth.trim().length === 0 || eduItem.endYear.trim().length === 0
            ? null
            : `${eduItem.endMonth} ${eduItem.endYear}`;
      }

      let paragraph;

      if (eduItem.school.length === 0) {
        paragraph = `${eduItem.city}`;
      } else if (eduItem.city.length === 0) {
        paragraph = `${eduItem.school}`;
      } else {
        paragraph = `${eduItem.school}, ${eduItem.city}`;
      }

      return (
        <div className={clsx(styles.listItem)} key={eduItem.id}>
          <div className={clsx(styles.sectionHeading)}>
            <h4>{eduItem.education}</h4>
            <div className={clsx(styles.dateTime)}>
              {sDate === null || eDate === null ? null : `${sDate} - ${eDate}`}
            </div>
          </div>
          <div className={clsx(styles.address)}>{paragraph}</div>
          <div className={clsx(styles.desc)}>{eduItem.description}</div>
        </div>
      );
    });

    const employmentList = empArr.map((empItem) => {
      const sDate =
        empItem.startMonth.trim().length === 0 || empItem.startYear.trim().length === 0
          ? null
          : `${empItem.startMonth} ${empItem.startYear}`;
      let eDate;

      if (empItem.isPresent === true) {
        eDate = 'Present';
      } else {
        eDate =
          empItem.endMonth.trim().length === 0 || empItem.endYear.trim().length === 0
            ? null
            : `${empItem.endMonth} ${empItem.endYear}`;
      }

      let paragraph;

      if (empItem.employer.length === 0) {
        paragraph = `${empItem.city}`;
      } else if (empItem.city.length === 0) {
        paragraph = `${empItem.employer}`;
      } else {
        paragraph = `${empItem.employer}, ${empItem.city}`;
      }

      return (
        <div className={clsx(styles.listItem)} key={empItem.id}>
          <div className={clsx(styles.sectionHeading)}>
            <h4>{empItem.position}</h4>
            <div className={clsx(styles.dateTime)}>
              {sDate === null || eDate === null ? null : `${sDate} - ${eDate}`}
            </div>
          </div>
          <div className={clsx(styles.address)}>{paragraph}</div>
          <div className={clsx(styles.desc)}>{empItem.description}</div>
        </div>
      );
    });

    return (
      <div className={clsx(styles.resume)} ref={ref}>
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
              <p>{`${address} ${postalCode} ${city}`}</p>
            </div>
          </div>
          <div className={clsx(styles.resumeContentMain)}>
            <div className={clsx(styles.educationSection)}>
              <h3 className={clsx(styles.sectionTitle)}>Education</h3>
              {educationList}
            </div>
            <div className={clsx(styles.employmentSection)}>
              <h3 className={clsx(styles.sectionTitle)}>Employment</h3>
              {employmentList}
            </div>
          </div>
        </div>
        <div className={clsx(styles.resumeFooter)} />
      </div>
    );
  },
);

CVHorizontal.propTypes = {
  personalDetails: PropTypes.object.isRequired,
};

export default CVHorizontal;
