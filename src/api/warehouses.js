const BASE_URL = 'http://localhost:8080/warehouses';

export const fetchWarehouses = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Error while fetching warehouses');
  }
  return response.json();
};

export const fetchWarehouseById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Error during fetching warehouse data');
  }
  return response.json();
};

export const addWarehouse = async (newWarehouse) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newWarehouse)
  });

  if (!response.ok) {
    throw new Error('Error while creating warehouse');
  }

  return response.json();
};

export const updateWarehouse = async (updatedWarehouse) => {
    const response = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWarehouse)
    });
  
    if (!response.ok) {
      throw new Error('Error while updating warehouse');
    }
  
    return updatedWarehouse;
  };
  

export const deleteWarehouse = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error while deleting warehouse');
  }

  return id;
};
