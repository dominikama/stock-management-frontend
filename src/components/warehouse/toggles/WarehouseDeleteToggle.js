import DeleteModalToggle from "../../common/DeleteModalToggle";
import { useWarehouses } from '../../../hooks/useWarehouses';


const WarehouseDeleteToggle = ({warehouseId}) => {
    const {deleteMutation} = useWarehouses();
    const handleSubmit = () => {
        console.log('Delete warehouse with id:', warehouseId);
        deleteMutation.mutate(warehouseId);
      };
    return (<DeleteModalToggle onSubmit={handleSubmit}/>);
};

export default WarehouseDeleteToggle;
