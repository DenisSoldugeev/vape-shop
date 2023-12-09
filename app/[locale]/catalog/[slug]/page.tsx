import CategoryPage from 'components/pages/CategoryPage';
import CategoriesService from 'utils/api/services/CategoryService';
import ProductsService from 'utils/api/services/ProductsService';
import CategoryService from 'utils/api/services/CategoryService';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const categoryData = await CategoriesService.getBySlug(params.slug);
  return {
    title: `Vape Store - ${categoryData.title}`,
  };
};
const Page = async ({ params }: { params: { slug: string } }) => {
  const categoryData = await CategoryService.getBySlug(params.slug);
  const productsData = await ProductsService.getByCategory(categoryData._id);

  return <CategoryPage category={categoryData} products={productsData} />;
};

export default Page;
