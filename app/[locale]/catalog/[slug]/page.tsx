import CategoryPage from 'components/pages/CategoryPage';
import { fetchCategoryBySlug } from 'utils/categoryService';
import { getProductsByCategory } from 'utils/productService';

const Page = async ({ params }: { params: { slug: string } }) => {
  const categoryData = await fetchCategoryBySlug(params.slug);
  const productsData = await getProductsByCategory(categoryData._id);

  return <CategoryPage category={categoryData} products={productsData} />;
};

export default Page;
