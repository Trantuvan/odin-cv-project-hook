import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineModeEditOutline, MdDelete } from 'react-icons/md';

import styles from '../../../styles/ListItem.module.css';
import clsx from 'clsx';

function ListItem({ defaultText, content }) {
  return (
    <div className={clsx('border', styles.item)}>
      {content === null ? <h4 className={clsx(styles.heading)}>{defaultText}</h4> : content}
      <div className={clsx(styles.actions)}>
        <div className={styles.btnActions}>
          <MdOutlineModeEditOutline />
        </div>
        <div className={clsx(styles.btnActions)}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  defaultText: PropTypes.string.isRequired,
  content: PropTypes.node,
  index: PropTypes.string.isRequired,
};
export default ListItem;
