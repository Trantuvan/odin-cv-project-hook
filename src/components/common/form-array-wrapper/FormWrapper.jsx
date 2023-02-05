import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

function FormWrapper({ FormTemplate, formName, listArray }) {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      {listArray}
      {showForm && <FormTemplate handleToggle={setShowForm} />}
      <button type="button" className={clsx('btn-add-form')} onClick={() => setShowForm(true)}>
        <AiOutlinePlus /> Add {formName}
      </button>
    </>
  );
}

FormWrapper.propTypes = {
  FormTemplate: PropTypes.func.isRequired,
  listArray: PropTypes.node.isRequired,
  formName: PropTypes.string.isRequired,
};

export default FormWrapper;
