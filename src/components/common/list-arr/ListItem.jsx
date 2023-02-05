/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { MdOutlineModeEditOutline, MdDelete } from 'react-icons/md';

import styles from '../../../styles/ListItem.module.css';
import { REMOVE } from '../../../hooks/useEduArray';

function ListItem({ defaultText, content, index, dispatch }) {
  return (
    <div className={clsx('border', styles.item)}>
      {content === null ? <h4 className={clsx(styles.heading)}>{defaultText}</h4> : content}
      <div className={clsx(styles.actions)}>
        <div className={styles.btnActions}>
          <MdOutlineModeEditOutline />
        </div>
        <div className={clsx(styles.btnActions)} onClick={() => dispatch({ type: REMOVE, payload: index })}>
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
  dispatch: PropTypes.func.isRequired,
};
export default ListItem;
