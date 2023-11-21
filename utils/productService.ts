import api from 'utils/api';

export const getProductsByCategory = async (categoryId: string) => {
  try {
    const response = await api.get(`products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
