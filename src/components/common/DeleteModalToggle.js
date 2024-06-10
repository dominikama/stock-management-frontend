import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg';

const DeleteModalToggle = ({onSubmit}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSubmit = () => {
   onSubmit();
   setShowDeleteModal(false);
  };

  return (
    <div>
        <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowDeleteModal(true);
        }}
        className="font-medium text-green-600 dark:text-blue-500 hover:underline">
        <DeleteIcon className="w-6 h-6 text-grey-600"/>
      </a>
      <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} onSubmit={handleSubmit} />
      </div>
  );
  
};

export default DeleteModalToggle;
