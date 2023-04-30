import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from '../CustomCard/CustomCard';

import './ProductDisplaySection.scss';
import Card from '../../types/Card';
import ProductDisplay from '../../types/ProductDisplay';

const ProductDisplaySection = (props: ProductDisplay) => {
  const data: Card = {
    title: 'Product Title',
    category: 'Featured Products',
    count: 34,
    price: 3242,
    rate: 4,
    image: '../../assets/images/src2.jpg',
    sale: false,
  };

  const { name, className } = props;

  return (
    <section className={className}>
      <Container>
        <div className='title'>
          <h3>{name}</h3>
          <div className='line'></div>
        </div>

        <Row>
          <Col xs={12} md={6} lg={3}>
            <CustomCard {...data} />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <CustomCard {...data} />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <CustomCard {...data} />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <CustomCard {...data} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDisplaySection;
