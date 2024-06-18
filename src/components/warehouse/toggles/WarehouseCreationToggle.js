import React, { useState } from 'react';
import WarehouseFormTemplate from '../forms/WarehouseFormTemplate';
import { useWarehouses } from '../../../hooks/useWarehouses';
import ErrorModal from '../../common/ErrorModal';

const WarehouseCreationToggle = () => {
  const [showForm, setShowForm] = useState(false);
  const { addMutation, error, setError } = useWarehouses();

  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleSubmit = (data) => {
    console.log('Creating warehouse with data:', data);
    addMutation.mutate(data, {
      onSuccess: () => {
        setShowForm(false);
      },
    });
  };

  return (
    <div>
      <div className="flex justify-center m-5">
        <ErrorModal error={error} onClose={() => setError(null)} />
        <button
          onClick={handleClick}
          className="block w-full max-w-xs mx-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          type="button">
          Create Warehouse
        </button>


        {showForm && (
          <WarehouseFormTemplate
            title="Create Warehouse"
            buttonText="Create"
            onSubmit={handleSubmit}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        )}
      </div>
    </div>
  );
};

export default WarehouseCreationToggle;
