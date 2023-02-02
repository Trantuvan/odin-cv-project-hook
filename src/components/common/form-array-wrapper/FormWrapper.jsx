import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';

import styles from '../../../styles/FormWrapper.module.css';

function FormWrapper({ children, formName }) {
  return (
    <>
      <form className={clsx(styles.border)}>
        {children}
        <button type="submit" className={clsx(styles.btnPrimary)}>
          <AiOutlineCheck className={clsx(styles.submitIcon)} /> Done
        </button>
      </form>
      <button type="button" className={clsx(styles.btnAddForm)}>
        <AiOutlinePlus /> Add {formName}
      </button>
    </>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  formName: PropTypes.string.isRequired,
};

export default FormWrapper;
