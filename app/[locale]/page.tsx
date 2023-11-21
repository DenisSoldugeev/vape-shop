import MainScreen from 'components/MainScreen';
import CategoriesService from 'utils/api/services/CategoryService';

export default async function Page() {
  const categoryData = await CategoriesService.getAll();
  return <MainScreen categoriesData={categoryData} />;
}
