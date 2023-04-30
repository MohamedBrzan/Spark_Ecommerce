import Categories from '../components/Categories/Categories';
import IntroSection from './IntroSection';

import './interface.scss';
import Advertising from '../components/Advertising/Advertising';
import ProductDisplaySection from '../components/ProductDisplaySection/ProductDisplaySection';
import ProductDisplay from '../types/ProductDisplay';
import FeatureDisplaySection from '../components/FeatureDisplaySection/FeatureDisplaySection';
import Feature from '../types/Feature';
import Brand from '../types/Brand';
import Cart from '../assets/images/cart.svg';
import Credit from '../assets/images/credit.svg';
import Service from '../assets/images/service.svg';
import Shipping from '../assets/images/shipping.svg';
import Testimonials from '../components/Testimonials/Testimonials';
import TestimonialsType from '../types/TestimonialsType';

import Image1 from '../assets/images/cloth1.jpg';
import Image2 from '../assets/images/cloth2.jpg';
import Image3 from '../assets/images/sale.jpg';
import Image4 from '../assets/images/src1.jpg';

const Interface = () => {
  const dataOne: ProductDisplay = {
    name: 'Featured Products',
    className: 'feature_products',
  };
  const dataTwo: ProductDisplay = {
    name: 'New Arrivals',
    className: 'feature_products',
  };
  const dataThree: Feature[] = [
    {
      image: Cart,
      title: 'Easy Shopping',
      desc: 'lorem ipsum dolor sit amet',
    },
    {
      image: Credit,
      title: 'Easy Shopping',
      desc: 'lorem ipsum dolor sit amet',
    },
    {
      image: Service,
      title: 'Easy Shopping',
      desc: 'lorem ipsum dolor sit amet',
    },
    {
      image: Shipping,
      title: 'Easy Shopping',
      desc: 'lorem ipsum dolor sit amet',
    },
  ];

  const dataFour: Brand[] = [
    {
      image: Cart,
    },
    {
      image: Credit,
    },
    {
      image: Service,
    },
    {
      image: Shipping,
    },
  ];

  const featuresName = 'Features';
  const BrandsName = 'Brands';

  const dataTestimonials: TestimonialsType[] = [
    {
      image: Image1,
      name: 'Testimonials',
      rate: 3,
      desc: 'Testimonials',
    },
    {
      image: Image2,
      name: 'Testimonials',
      rate: 4,
      desc: 'Testimonials',
    },
    {
      image: Image3,
      name: 'Testimonials',
      rate: 3.5,
      desc: 'Testimonials',
    },
    {
      image: Image4,
      name: 'Testimonials',
      rate: 5,
      desc: 'Testimonials',
    },
  ];

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
      <FeatureDisplaySection features={dataThree} name={featuresName} />
      <FeatureDisplaySection features={dataFour} name={BrandsName} />
      <Testimonials {...dataTestimonials} />
    </div>
  );
};

export default Interface;
