import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchWarehouses, addWarehouse, updateWarehouse, deleteWarehouse } from '../api/warehouses';
import { useState } from 'react';

export const useWarehouses = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);

  const queryResult = useQuery({
    queryKey: ['warehouses'],
    queryFn: fetchWarehouses,
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

  const addMutation = useMutation({
    mutationFn: addWarehouse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
      console.log("Add success");
      setError(null); // Clear any existing errors on success
    },
    onError: (error) => {
      console.log("Add mutation error:", error);
      setError({ message: error.message, responseCode: error.responseCode });
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateWarehouse,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
      queryClient.invalidateQueries({ queryKey: ['warehouse', data.id] });
      console.log("Update success");
      setError(null); // Clear any existing errors on success
    },
    onError: (error) => {
      console.log("Update mutation error:", error);
      setError({ message: error.message, responseCode: error.responseCode });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteWarehouse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
      console.log("Delete success");
      setError(null); // Clear any existing errors on success
    },
    onError: (error) => {
      console.log("Delete mutation error:", error);
      setError({ message: error.message, responseCode: error.responseCode });
    }
  });

  console.log('Current error state:', error);
  return {     warehouses: queryResult.data ?? [], 
    isLoading: queryResult.isLoading, error, addMutation, updateMutation, deleteMutation, setError };
};
