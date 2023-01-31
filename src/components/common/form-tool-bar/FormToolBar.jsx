import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from '../../../styles/FormToolBar.module.css';

function FormToolBar({ formName }) {
  return <h1 className={clsx(styles.formToolbar)}>{formName}</h1>;
}

FormToolBar.propTypes = {
  formName: PropTypes.string.isRequired,
};

export default FormToolBar;
