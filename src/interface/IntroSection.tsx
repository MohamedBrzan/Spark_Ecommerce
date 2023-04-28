import ClothOne from '../assets/images/cloth1.jpg';
import ClothTwo from '../assets/images/cloth2.jpg';
import Sale from '../assets/images/sale.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './interface.scss';
const IntroSection = () => {
  return (
    <section className='intro_section'>
      <figure className='intro_images'>
        <Row>
          <Col xs={6} md={4} className='img_col'>
            {' '}
            <img src={ClothOne} alt='Clothe One Image.' />
          </Col>
          <Col xs={6} md={4} className='img_col'>
            {' '}
            <img src={Sale} alt='Sale Image.' />
          </Col>{' '}
          <Col xs={6} md={4} className='img_col'>
            {' '}
            <img src={ClothTwo} alt='Clothe Two Image.' />
          </Col>
        </Row>
      </figure>
    </section>
  );
};

export default IntroSection;
