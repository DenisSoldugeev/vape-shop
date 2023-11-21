import MainScreen from 'components/MainScreen';
import { fetchCategories } from 'utils/categoryService';

export default async function Page() {
  const categoryData = await fetchCategories();
  return <MainScreen categoriesData={categoryData} />;
}
