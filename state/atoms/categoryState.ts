import { atom } from 'recoil';
import { Category } from 'types/categories';

export const categoryState = atom<Category[]>({
  key: 'categoryState',
  default: [],
});
