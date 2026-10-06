import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductBySlug } from '@/utils/productHelpers';
import Products from '@/pages/Products';
import ProductModal from '@/components/ProductModal';

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    if (slug && !product) {
      navigate('/products', { replace: true });
    }
  }, [slug, product, navigate]);

  const handleClose = () => {
    navigate('/products', { replace: true });
  };

  return (
    <>
      <Products />
      {product && <ProductModal product={product} onClose={handleClose} />}
    </>
  );
}
