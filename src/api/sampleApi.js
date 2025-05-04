import { API_BASE_URL } from "../configs/Config";

// Function to handle errors
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }
  return await response.json();
};

// Create a new item (POST)
export const createItem = async (data) => {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Read/Get all items (GET)
export const getItems = async () => {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleResponse(response);
};

// Read/Get a specific item by ID (GET)
export const getItemById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleResponse(response);
};

// Update an item by ID (PUT)
export const updateItem = async (id, data) => {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Delete an item by ID (DELETE)
export const deleteItem = async (id) => {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleResponse(response);
};
