import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopyright,
  faLocation,
  faMailBulk,
  faMailForward,
  faMailReplyAll,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Stack direction='horizontal' gap={5} className='p-5'>
        <Col>
          <h2>Spark</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ab quibusdam repudiandae omnis, blanditiis quaerat iure in a
            necessitatibus
          </p>
        </Col>
        <Col>
          <h4>Contact Us</h4>
          <div className='address'>
            <FontAwesomeIcon icon={faLocation} /> <span>123 Street</span>
          </div>
          <div className='phone'>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <Link to='tel:+201113772369'>( +20 ) 111-377-2369</Link>
          </div>
          <div className='email'>
            <FontAwesomeIcon icon={faMailBulk} />
            <Link to='mailto:mohamedmahmoudbrzan@gamil.com'>
              My Gmail Account
            </Link>
          </div>
        </Col>
        <Col>
          <h4>Customer Service</h4>
          <p>Help & FAQ</p>
          <p>Order Tracking</p>
          <p>Stamp</p>
        </Col>
        <Col>
          <h4>Company</h4>
          <p>Help & FAQ</p>
          <p>Order Tracking</p>
          <p>Stamp</p>
        </Col>
        <Col>
          <h4>Be in touch</h4>
          <FormControl />
          <Button className='btn border my-3' variant='outlined'>
            Subscribe
          </Button>
        </Col>
      </Stack>
      <hr />
      <div className='text-center'>
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
        <span className='px-1'>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
