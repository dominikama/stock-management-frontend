const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
const WAREHOUSES_URL = `${BASE_URL}/warehouses`;


export const fetchWarehouses = async () => {
  const response = await fetch(WAREHOUSES_URL);
  if (!response.ok) {
    const errorData = await response.json();
    console.log("Fetch error:", errorData.message);
    throw { message: errorData.message || 'Error while fetching warehouse', responseCode: response.status };
  }
  return response.json();
};

export const fetchWarehouseById = async (id) => {
  const response = await fetch(`${WAREHOUSES_URL}/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw { message: errorData.message || 'Error while fetching warehouse', responseCode: response.status };
  }
  return response.json();
};

export const addWarehouse = async (newWarehouse) => {
  const response = await fetch(WAREHOUSES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newWarehouse)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw { message: errorData.message || 'Error while creating warehouse', responseCode: response.status };  
  }

  return response.json();
};

export const updateWarehouse = async (updatedWarehouse) => {
    const response = await fetch(WAREHOUSES_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWarehouse)
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw { message: errorData.message || 'Error while updating warehouse', responseCode: response.status };
    }
  
    return updatedWarehouse;
  };
  

export const deleteWarehouse = async (id) => {
  const response = await fetch(`${WAREHOUSES_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw { message: errorData.message || 'Error while deleting warehouse', responseCode: response.status };
  }

  return id;
};
