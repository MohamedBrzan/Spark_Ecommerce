import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';

import signInImage from '../assets/images/Auth/signIn.jpg';
import './Auth.scss';
import FormCheck from 'react-bootstrap/FormCheck';
import SocialMediaLinks, {
  SocialMediaIconsSize,
} from '../components/SocialMediaLinks/SocialMediaLinks';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const socialMediaIconsProps: SocialMediaIconsSize = {
  size: 40,
};

const SignIn = () => {
  return (
    <div className='auth sign_in'>
      <Row>
        <Col md={6} className='auth_img'>
          <figure>
            <img src={signInImage} alt='Sign Up Image.' />
          </figure>
        </Col>
        <Col md={6} className='login_col'>
          <div className='sign_in_content'>
            <div className='page_name'>
              <h1 className='sing_in_txt'>Log in</h1>
              <p>Enter your credentials to access your account</p>
            </div>

            <div className='SignIn_links'>
              <SocialMediaLinks {...socialMediaIconsProps} />
            </div>
            <div className='lines_word grey'>
              <div></div>
              <span>or</span>
              <div></div>
            </div>

            <Col lg={9} className='m-auto'>
              <Form>
                <FormGroup className='mb-3'>
                  <FormLabel aria-label='Email Label'>Email Address</FormLabel>
                  <FormControl
                    type='email'
                    required
                    aria-label='Email Input'
                    placeholder='Enter Your Email'
                  />
                </FormGroup>

                <FormGroup className='mb-3'>
                  <FormLabel aria-label='Password Label'>Password</FormLabel>
                  <FormControl
                    type='password'
                    required
                    aria-label='Password Input'
                    placeholder='Enter Your Password'
                  />
                </FormGroup>

                <FormGroup>
                  <FormCheck
                    required
                    aria-label='Password Input'
                    label='Keep me signed in'
                  />
                </FormGroup>
                <div className='text-end'>
                  <Link to='/forget_password'>Forget Password ?</Link>
                </div>

                <Button className='form_btn'>Login</Button>
                <div className='text-center'>
                  <Link to='/sign_up_decision'>
                    I don't have any account yet!
                  </Link>
                </div>
              </Form>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
