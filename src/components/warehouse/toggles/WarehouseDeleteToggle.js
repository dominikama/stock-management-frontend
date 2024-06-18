import DeleteModalToggle from "../../common/DeleteModalToggle";
import { useWarehouses } from '../../../hooks/useWarehouses';
import ErrorModal from "../../common/ErrorModal";


const WarehouseDeleteToggle = ({warehouseId}) => {
    const {deleteMutation, error, setError} = useWarehouses();
    const handleSubmit = () => {
        console.log('Delete warehouse with id:', warehouseId);
        deleteMutation.mutate(warehouseId);
      };
    return (<div>
              <ErrorModal error={error} onClose={() => setError(null)}/>
              <DeleteModalToggle onSubmit={handleSubmit}/>
            </div>);
};

export default WarehouseDeleteToggle;
