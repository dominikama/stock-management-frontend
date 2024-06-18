import React, { useState } from 'react';
import WarehouseFormTemplate from '../forms/WarehouseFormTemplate';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit-icon.svg';
import { useWarehouses } from '../../../hooks/useWarehouses';
import { useWarehouseById } from '../../../hooks/useWarehouseById';
import ErrorModal from '../../common/ErrorModal';

const WarehouseUpdateFormToggle = ({ warehouseId }) => {
  const [showForm, setShowForm] = useState(false);
  const { updateMutation, error, setError } = useWarehouses();
  const { data: warehouse } = useWarehouseById(warehouseId);

  const handleSubmit = (data) => {
    console.log('Updating warehouse with data:', data);
    updateMutation.mutate(data, {
      onSuccess: () => {
        setShowForm(false);
      },
    });
  };

  const handleViewClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div>
      <ErrorModal error={error} onClose={() => setError(null)}/>
      <a
        href="#"
        onClick={handleViewClick}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        <EditIcon className="w-6 h-6 text-grey-600" />
      </a>
      {showForm && warehouse && (
        <WarehouseFormTemplate
          title="Edit Warehouse"
          buttonText="Save"
          onSubmit={handleSubmit}
          showForm={showForm}
          initialData={warehouse}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default WarehouseUpdateFormToggle;
