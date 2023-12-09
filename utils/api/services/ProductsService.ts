import api from 'utils/api';
import { Product } from 'types/products';

const ProductsService = {
  async getByCategory(categoryId: string) {
    try {
      const response = await api.get(`products/category/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  async getById(id: string): Promise<Product | null> {
    try {
      const response = await api.get(`products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return null;
    }
  },
};

export default ProductsService;
