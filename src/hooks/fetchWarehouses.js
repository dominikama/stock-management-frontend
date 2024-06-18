import { useQuery } from '@tanstack/react-query';
import { fetchWarehouses} from '../api/warehouses';

export const useFetchWarehouses = () => {
    const queryResult = useQuery({
      queryKey: ['warehouses'],
      queryFn: fetchWarehouses
    });

    return {     warehouses: queryResult.data ?? [], 
        isLoading: queryResult.isLoading, error: queryResult.error}
}