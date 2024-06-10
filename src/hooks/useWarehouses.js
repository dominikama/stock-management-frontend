import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchWarehouses, addWarehouse, updateWarehouse, deleteWarehouse } from '../api/warehouses';

export const useWarehouses = () => {
  const queryClient = useQueryClient();

  const { data: warehouses, error, isLoading } = useQuery({
    queryKey: ['warehouses'],
    queryFn: fetchWarehouses,
  });

  const addMutation = useMutation({
    mutationFn: addWarehouse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateWarehouse,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
      queryClient.invalidateQueries({ queryKey: ['warehouse', data.id] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteWarehouse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['warehouses'] });
    },
  });

  return { warehouses, error, isLoading, addMutation, updateMutation, deleteMutation };
};
