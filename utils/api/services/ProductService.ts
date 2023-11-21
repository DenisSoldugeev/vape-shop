import api from 'utils/api';

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
};

export default ProductsService;
