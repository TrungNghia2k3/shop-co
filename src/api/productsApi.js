import { API_BASE_URL } from "../configs/Config";

const API_BASE_PRODUCT = API_BASE_URL + '/products';

// Function to handle errors
const handleResponse = async (response) => {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }
    return await response.json();
  };


export const getProductsCategoryList = async () => {
    const response = await fetch(`${API_BASE_PRODUCT}/category-list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return handleResponse(response);
  };    