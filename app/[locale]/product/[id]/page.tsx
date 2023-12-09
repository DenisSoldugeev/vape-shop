import { Product } from 'types/products';
import ProductPage from 'components/pages/ProductPage';
import ProductsService from 'utils/api/services/ProductsService';
import NotFound from 'next/dist/client/components/not-found-error';

type Props = {
  params: {
    id: string;
  };
  product: Product;
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  const product = await ProductsService.getById(id);
  return {
    title: `Vape Store - ${product?.name}`,
  };
};

export default async function Page({ params: { id } }: Props) {
  const product = await ProductsService.getById(id);

  if (!product) {
    return <NotFound />;
  }
  return <ProductPage product={product} />;
}
