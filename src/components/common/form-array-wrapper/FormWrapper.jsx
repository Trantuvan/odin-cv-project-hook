import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AiOutlinePlus } from 'react-icons/ai';
import { cloneElement, useState } from 'react';

function FormWrapper({ FormTemplate, formName, listArray }) {
  const [showForm, setShowForm] = useState(true);
  const [itemIndex, setItemIndex] = useState('');
  const [isEdit, setEdit] = useState(false);
  const clonedListArray = cloneElement(listArray, {
    handleEditState: setEdit,
    handleToggle: setShowForm,
    handleIndexItem: setItemIndex,
  });

  return (
    <>
      {clonedListArray}
      {showForm && (
        <FormTemplate handleToggle={setShowForm} itemIndex={itemIndex} isEdit={isEdit} handleEditState={setEdit} />
      )}
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
