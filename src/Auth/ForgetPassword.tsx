import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import signInImage from '../assets/images/Auth/signIn.jpg';

import './Auth.scss';

const ForgetPassword = () => {
  return (
    <div className='auth forget_password'>
      <Row className='m-0 p-0'>
        <Col  className='auth_img'>
          <figure>
            <img src={signInImage} alt='Sign In Image.' />
          </figure>
        </Col>
        <Col>
          <h1>Forget Password</h1>
          <p>send code</p>
          <div className='lines_word orange'>
            <div></div>
            <span>width</span>
            <div></div>
          </div>
          <div className='buttons'>
            <Button className='signUp_btn'>Mobile Number</Button>
            <Link
              to='/sign_up'
              className='signUp_btn text-decoration-none text-light'
            >
              Email
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPassword;
