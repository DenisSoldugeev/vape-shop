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
