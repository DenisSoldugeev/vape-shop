import { Product } from 'types/products';
import ProductPage from 'components/pages/ProductPage';

type Props = {
  params: {
    id: string;
  };
  product: Product;
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  return {
    title: `Vape Store - ${id}`,
  };
};

export default async function Page() {
  return <ProductPage />;
}
