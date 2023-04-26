import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Auth.scss';
import SocialMediaLinks from '../components/SocialMediaLinks/SocialMediaLinks';
import { socialMediaIconsProps } from './SignIn';
import AuthForms from './AuthForms/AuthForms';
import signInImage from '../assets/images/Auth/signIn.jpg';

const SignUp = () => {
  return (
    <div className='auth sign_up'>
      <Row>
        <Col md={6} className='auth_img'>
          <figure>
            <img src={signInImage} alt='Sign Up Image.' />
          </figure>
        </Col>
        <Col md={6} className='login_col'>
          <div className='sign_up_content'>
            <div className='page_name'>
              <h1>Sign Up</h1>
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
              <AuthForms />
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
