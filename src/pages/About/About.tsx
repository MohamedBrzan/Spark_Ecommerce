import Container from 'react-bootstrap/Container';
import Feature from '../../types/Feature';
import Cart from '../../assets/images/cart.svg';
import Credit from '../../assets/images/credit.svg';
import Service from '../../assets/images/service.svg';
import Shipping from '../../assets/images/shipping.svg';

import Image1 from '../../assets/images/cloth1.jpg';
import Image2 from '../../assets/images/cloth2.jpg';
import Image3 from '../../assets/images/sale.jpg';
import Image4 from '../../assets/images/src1.jpg';

import FeatureDisplaySection from '../../components/FeatureDisplaySection/FeatureDisplaySection';
import './About.scss';
import HappyClients from '../../components/HappyClients/HappyClients';
import TestimonialsType from '../../types/TestimonialsType';
import { Row } from 'react-bootstrap';
import BreadCrumbType from '../../types/BreadCrumbType';
import CustomBreadCrumb from '../../components/CustomBreadCrumb/CustomBreadCrumb';

const About = () => {
  const data: Feature[] = [
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

  const name = 'Why Choose Us ?';

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

  const BreadcrumbData: BreadCrumbType[] = [
    {
      name: 'About',
    },
  ];

  return (
    <div className='about'>
      <Container>
        <Row>
          <CustomBreadCrumb {...BreadcrumbData} />
        </Row>
        <div className='title'>
          <h3>
            <strong>Our Story</strong>
          </h3>
          <div className='line'></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iste
          exercitationem dolore fugiat nobis tempore cum error labore distinctio
          velit deleniti, odit, quis accusantium officia delectus. Id corrupti a
          ducimus?
        </p>
        <FeatureDisplaySection features={[...data]} name={name} />

        <div className='title'>
          <h3>
            <strong>Happy Clients</strong>
          </h3>
          <div className='line'></div>
        </div>
        <HappyClients {...dataTestimonials} />
      </Container>
    </div>
  );
};

export default About;
