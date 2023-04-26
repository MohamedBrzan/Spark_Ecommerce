import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import signInImage from '../assets/images/Auth/signIn.jpg';

import './Auth.scss';

const ChangePassword = () => {
  return (
    <div className='auth forget_password'>
      <Row className='m-0 p-0'>
        <Col className='auth_img'>
          <figure>
            <img src={signInImage} alt='Sign In Image.' />
          </figure>
        </Col>
        <Col>
          <h1>New Password</h1>

          <Form className='text-start'>
            <Row className='m-0 p-0'>
              <Col xs={12} md={6}>
                <FormGroup className='mb-3'>
                  <FormLabel aria-label='Password Label'>
                    <small>Password</small>
                  </FormLabel>
                  <FormControl
                    type='password'
                    required
                    aria-label='Password Input'
                    placeholder='Enter Your Password'
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className='mb-3'>
                  <FormLabel aria-label='Confirm Password Label'>
                    <small>Confirm Password</small>
                  </FormLabel>
                  <FormControl
                    type='password'
                    required
                    aria-label='Confirm Password Input'
                    placeholder='Confirm Your Password'
                  />
                </FormGroup>
              </Col>
            </Row>

            <Button className='form_btn'>Save</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ChangePassword;
