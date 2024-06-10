import React, { useState } from 'react';
import WarehouseDetails from '../WarehouseDetails';
import { ReactComponent as ViewIcon } from '../../../assets/icons/view-icon.svg';
import { useWarehouseById } from '../../../hooks/useWarehouseById';

const WarehouseDetailsToggle = ({ warehouseId }) => {
  const [showWarehouseDetails, setShowWarehouseDetails] = useState(false);
  const { data: warehouse, error, isLoading } = useWarehouseById(warehouseId);


  const handleViewClick = (e) => {
    e.preventDefault();
    setShowWarehouseDetails(true);
  };

  return (
    <div>
      <a
        href="#"
        onClick={handleViewClick}
        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
      >
        <ViewIcon className="w-6 h-6 text-grey-600" />
      </a>
      {warehouse && (
        <WarehouseDetails
          showWarehouseDetails={showWarehouseDetails}
          setShowWarehouseDetails={setShowWarehouseDetails}
          warehouse={warehouse}
        />
      )}
    </div>
  );
};

export default WarehouseDetailsToggle;
