import { selectorFamily } from 'recoil';
import { categoryState } from '../atoms/categoryState';
import { Category } from 'types/categories';

export const filteredCategorySelector = selectorFamily<
  Category | undefined,
  string
>({
  key: 'filteredCategorySelector',
  get:
    (slug) =>
    ({ get }) => {
      const categories = get(categoryState);

      return categories.find((cat) => cat.slug === slug);
    },
});
