import Categories from '../components/Categories/Categories';
import IntroSection from './IntroSection';

import './interface.scss';
import Advertising from '../components/Advertising/Advertising';
import ProductDisplaySection from '../components/ProductDisplaySection/ProductDisplaySection';
import ProductDisplay from '../types/ProductDisplay';

const Interface = () => {
  const dataOne: ProductDisplay = {
    name: 'Featured Products',
    className: 'feature_products',
  };
  const dataTwo: ProductDisplay = {
    name: 'New Arrivals',
    className: 'feature_products',
  };
  return (
    <div className='interface'>
      <IntroSection />
      <div className='offer_speech'>
        <p>
          <strong>
            Get 50% off on your first Purchase with{' '}
            <span className='offer_code'>Code: Code 123</span>
          </strong>
        </p>
        <p>
          <strong>applicable to orders of 60% or more - max 50$ off</strong>
        </p>
      </div>

      <ProductDisplaySection {...dataOne} />
      <Categories />
      <Advertising />
      <ProductDisplaySection {...dataTwo} />
    </div>
  );
};

export default Interface;
