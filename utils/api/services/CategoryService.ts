import api from '../index';
import { Category } from 'types/categories';

const CategoriesService = {
  async getAll(): Promise<Category[]> {
    try {
      const response = await api.get<Category[]>('/categories'); // Путь к вашему API для категорий
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getBySlug(slug: string) {
    try {
      const response = await api.get(`/categories/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении категории:', error);
      throw error;
    }
  },
};

export default CategoriesService;
