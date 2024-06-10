import Sidebar from "../SideBar";
import WarehouseCreationToggle from "./toggles/WarehouseCreationToggle";
import WarehousesTable from "./WarehousesTable";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();


const WarehousePage = () => {
return (
  <QueryClientProvider client={queryClient}>
    <div>
    <Sidebar></Sidebar>
    <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-4xl font-bold dark:text-white">Warehouses</h2>
      <WarehouseCreationToggle />
    </div>
        <WarehousesTable/>
    </div>
    </div>
    </div>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>);};
    export default WarehousePage;
