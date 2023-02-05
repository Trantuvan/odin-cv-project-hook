import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ListItem from './ListItem';
import styles from '../../../styles/ListArr.module.css';

function ListArr({ listArr, dispatch, defaultText }) {
  const generatedArr = useMemo(() => {
    const arr = [];

    listArr.forEach((item) => {
      let paragraph;
      let content;

      switch (defaultText) {
        case '[Education]':
          if (item.school.length === 0) {
            paragraph = `${item.city}`;
          } else if (item.city.length === 0) {
            paragraph = `${item.school}`;
          } else {
            paragraph = `${item.school}, ${item.city}`;
          }
          content = (
            <div className={clsx(styles.contentWrapper)}>
              <h4 className={clsx(styles.heading)}>{item.education}</h4>
              <p className={clsx(styles.paragraph)}>{paragraph}</p>
            </div>
          );
          arr.push(
            <ListItem
              key={item.id}
              index={item.id}
              defaultText={defaultText}
              dispatch={dispatch}
              content={
                item.education.length === 0 && item.school.length === 0 && item.city.length === 0 ? null : content
              }
            />,
          );
          break;
        default:
          throw new Error('Unsupported list type: ' + item.type);
      }
    });
    return arr;
  }, [defaultText, listArr, dispatch]);

  return <>{generatedArr}</>;
}

ListArr.propTypes = {
  listArr: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  defaultText: PropTypes.string.isRequired,
};

export default ListArr;
