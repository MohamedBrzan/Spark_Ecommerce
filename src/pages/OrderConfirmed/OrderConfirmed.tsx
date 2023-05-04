import Container from 'react-bootstrap/Container';
import Store from '../../assets/images/store.svg';
import Store2 from '../../assets/images/store2.svg';
import Store3 from '../../assets/images/store3.svg';
import './OrderConfirmed.scss';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderConfirmed = () => {
  return (
    <div className='order_confirmed'>
      <Container>
        <Col xs={12} md={6} lg={4} className='m-auto'>
          <figure>
            <img src={Store3} alt='image/.' width={500} />
          </figure>
          <figure>
            <img src={Store2} alt='image/.' width={100} />
          </figure>
          <h3>Order #fdgdfghdsfg Confirmed</h3>
          <div className='form_btn'>
            <Link to='/order_confirmed/track_order'>Track Order</Link>
          </div>
          <p className='receipt'>Generate Receipt</p>
        </Col>
      </Container>
    </div>
  );
};

export default OrderConfirmed;
