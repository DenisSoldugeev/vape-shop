import api from './api';
import { Category } from 'types/categories';

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>('/categories'); // Путь к вашему API для категорий
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCategoryBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/categories/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении категории:', error);
    throw error;
  }
};
