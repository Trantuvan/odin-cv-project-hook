/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

import styles from '../../../styles/FormToolBar.module.css';
import { useToggle } from '../../../hooks/useToggle';

function FormToolBar({ formName, formNumber, isOpen }) {
  const { toggleForm1, toggleForm2, toggleForm3 } = useToggle();
  const ref = useRef(null);

  function handleScroll() {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleToggle() {
    switch (formNumber) {
      case 1:
        toggleForm1();
        break;

      case 2:
        toggleForm2();
        break;

      case 3:
        toggleForm3();
        break;

      default:
        throw new Error('Unsupported form number:' + formName);
    }
  }

  return (
    <div className={clsx(styles.formToolbarContainer)} ref={ref}>
      <h1 className={clsx(styles.formToolbarTitle)}>{formName}</h1>
      <div
        className={clsx(styles.formToolbarAction)}
        onClick={() => {
          handleToggle();
          handleScroll();
        }}
      >
        {isOpen ? (
          <MdOutlineKeyboardArrowUp className={clsx(styles.btnAction)} />
        ) : (
          <MdOutlineKeyboardArrowDown className={clsx(styles.btnAction)} />
        )}
      </div>
    </div>
  );
}

FormToolBar.propTypes = {
  formName: PropTypes.string.isRequired,
  formNumber: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default FormToolBar;
