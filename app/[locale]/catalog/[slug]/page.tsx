import CategoryPage from 'components/pages/CategoryPage';
import { fetchCategoryBySlug } from 'utils/categoryService';

const Page = async ({ params }: { params: { slug: string } }) => {
  const categoryData = await fetchCategoryBySlug(params.slug);
  return <CategoryPage category={categoryData} />;
};

export default Page;
