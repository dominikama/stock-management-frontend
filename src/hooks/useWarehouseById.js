import { useQuery } from '@tanstack/react-query';
import { fetchWarehouseById } from '../api/warehouses';
import { useState } from 'react';


export const useWarehouseById = (warehouseId) => {
  const [error, setError] = useState(null);

  const queryResult = useQuery({
    queryKey: ['warehouse', warehouseId],
    queryFn: () => fetchWarehouseById(warehouseId),
    enabled: !!warehouseId,
    onSuccess: () => {
      setError(null);
    },
    onError: (err) => {
      setError({
        message: err.message || 'An error occurred while fetching the warehouse data',
        responseCode: err.response?.status || 500,
      });
    },
  });

  return { ...queryResult, error, setError };
};
