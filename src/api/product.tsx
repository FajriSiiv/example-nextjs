import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export const getData = async (count = 10) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await axios.get(BASE_URL, {
      params: {
        limit: count,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random product:", error);
    throw error;
  }
};

export const getDataDetail = async (id: any) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random product:", error);
    throw error;
  }
};
