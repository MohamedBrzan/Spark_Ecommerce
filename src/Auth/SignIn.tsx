import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';

import { BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import signInImage from '../assets/images/Auth/signIn.jpg';
import './Auth.scss';
import FormCheck from 'react-bootstrap/FormCheck';
import { Container } from 'react-bootstrap';
const SignIn = () => {
  return (
    <div className='auth sign_in'>
      <Row>
        <Col xs={6} className='login_img'>
          <figure>
            <img src={signInImage} alt='Sign Up Image.' />
          </figure>
        </Col>
        <Col xs={6} className='login_col'>
          <div className='sign_in_content'>
            <div className='page_name'>
              <h1 className='sing_in_txt'>Log in</h1>
              <p>Enter your credentials to access your account</p>
            </div>

            <div className='SignIn_links'>
              <BsFacebook size={50} />
              <FcGoogle size={50} />
              <BsApple size={50} />
            </div>
            <p className='text-center py-5'>
              <strong>or</strong>
            </p>

            <Form>
              <Col xs={9} >
                {' '}
                <FormGroup className='mb-3'>
                  <FormLabel aria-label='Email Label'>Email Address</FormLabel>
                  <FormControl type='email' required aria-label='Email Input' />
                </FormGroup>
              </Col>
              <Col xs={9}>
                <FormGroup className='mb-3'>
                  <FormLabel aria-label='Password Label'>Password</FormLabel>
                  <FormControl
                    type='password'
                    required
                    aria-label='Password Input'
                  />
                </FormGroup>
              </Col>
              <FormGroup>
                <FormCheck
                  required
                  aria-label='Password Input'
                  label='Keep me signed in'
                />
              </FormGroup>

              <Button className='form_btn'>Login</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
