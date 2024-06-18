import React from 'react';
import WarehouseDetailsToggle from './toggles/WarehouseDetailsToggle';
import WarehouseUpdateFormToggle from './toggles/WarehouseUpdateFormToggle';
import WarehouseDeleteToggle from './toggles/WarehouseDeleteToggle';
import { useFetchWarehouses } from '../../hooks/fetchWarehouses';
import Table from '../common/Table';

const WarehousesTable = () => {
  const { warehouses, error, isLoading } = useFetchWarehouses();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message} (Code: {error.responseCode})</div>;


  const columns = [
    { key: 'number', title: 'Code', dataIndex: 'number' },
    { key: 'name', title: 'Name', dataIndex: 'name' },
    { key: 'country', title: 'Country', dataIndex: 'country' },
    { key: 'city', title: 'City', dataIndex: 'city' },
    { key: 'address', title: 'Address', dataIndex: 'address' },
    { key: 'enabled', title: 'Enabled', dataIndex: 'enabled', render: (enabled) => (enabled ? 'Yes' : 'No') },
    {
      key: 'actions',
      title: 'Actions',
      dataIndex: 'id',
      render: (id) => (
        <div className="flex space-x-4">
          <WarehouseDetailsToggle warehouseId={id} />
          <WarehouseUpdateFormToggle warehouseId={id} />
          <WarehouseDeleteToggle warehouseId={id} />
        </div>
      ),
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Table columns={columns} data={warehouses} />
    </div>
  );
};

export default WarehousesTable;
