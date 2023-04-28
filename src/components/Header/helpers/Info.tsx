import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faTags,
  faShuffle,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <Row className='info'>
      <Col xs={12} md={6} lg={3}>
        <span>
          <FontAwesomeIcon icon={faTruck} />
        </span>
        <span>
          <small>Free Shipping Over 100$</small>
        </span>
      </Col>
      <Col xs={12} md={6} lg={3}>
        <span>
          <FontAwesomeIcon icon={faTags} />
        </span>

        <span>
          <small>Get Up To 40%</small>
        </span>
      </Col>

      <Col xs={12} md={6} lg={3}>
        <span>
          <FontAwesomeIcon icon={faShuffle} />
        </span>

        <span>
          <small>Flexible Payment Options</small>
        </span>
      </Col>
      <Col xs={12} md={6} lg={3}>
        <span>
          <FontAwesomeIcon icon={faPhone} />
        </span>

        <span>
          <small>Call Us</small>
        </span>
      </Col>
    </Row>
  );
};

export default Info;
