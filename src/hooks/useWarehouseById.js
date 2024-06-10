import { useQuery } from '@tanstack/react-query';
import { fetchWarehouseById } from '../api/warehouses';

export const useWarehouseById = (warehouseId) => {
  return useQuery({
    queryKey: ['warehouse', warehouseId],
    queryFn: () => fetchWarehouseById(warehouseId),
    enabled: !!warehouseId,
  });
};
