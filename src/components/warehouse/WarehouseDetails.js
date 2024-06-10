import WarehouseUpdateFormToggle from './toggles/WarehouseUpdateFormToggle';
import WarehouseDeleteToggle from './toggles/WarehouseDeleteToggle';

const WarehouseDetails = ({ showWarehouseDetails, setShowWarehouseDetails, warehouse }) => {

  return (
    <>
      {showWarehouseDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowWarehouseDetails(false)}></div>
      )}
      <div
        className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center transition-opacity ${
          showWarehouseDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative p-4 w-full max-w-xl h-full md:h-auto bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex justify-between items-center mb-4 rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 md:text-xl dark:text-white">
              <h3 className="font-semibold">{warehouse.number} - {warehouse.name}</h3>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setShowWarehouseDetails(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Enabled</dt>
                <dd class="text-lg font-semibold"> {warehouse.enabled ? 'Yes' : 'No'}</dd>
            </div>
            <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Address</dt>
                <dd class="text-lg font-semibold">{warehouse.address}, {warehouse.city}, {warehouse.postalCode}, {warehouse.country}</dd>
            </div>
        </dl>
          <div className="flex justify-between items-center">
          <WarehouseUpdateFormToggle warehouseId={warehouse.id} />
          <WarehouseDeleteToggle warehouseId={warehouse.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WarehouseDetails;
