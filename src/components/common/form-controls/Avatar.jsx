/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import '../../../styles/Avatar.module.css';

import PropTypes from 'prop-types';

function Avatar({ form, handlePreview }) {
  const inputRef = useRef(null);
  const { photoUrl } = form;

  const clickHandler = () => {
    inputRef.current.click();
  };

  return (
    <div className="form-control">
      <label htmlFor="photo">Photo</label>
      <input type="file" name="photo" id="photo" accept="image/*" ref={inputRef} onChange={handlePreview} hidden />
      <img src={photoUrl} alt="user-avatar" onClick={clickHandler} />
    </div>
  );
}

Avatar.propTypes = {
  form: PropTypes.object.isRequired,
  handlePreview: PropTypes.func.isRequired,
};

export { Avatar };
