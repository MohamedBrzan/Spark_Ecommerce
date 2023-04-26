import Button from 'react-bootstrap/Button';
import signUpImage from '../assets/images/Auth/singup.jpg';
import './Auth.scss';
import SocialMediaLinks, {
  SocialMediaIconsSize,
} from '../components/SocialMediaLinks/SocialMediaLinks';
import { Link } from 'react-router-dom';
const SignUpDecision = () => {
  const socialMediaIconsProps: SocialMediaIconsSize = {
    size: 40,
  };
  return (
    <div className='auth sign_up'>
      <figure className='sing_up'>
        <img src={signUpImage} alt='Sign Up Image.' />
      </figure>

      <div className='page_name'>
        <h1 className='sing_up_txt'>Sign Up</h1>
        <div className='lines_word orange'>
          <div></div>
          <span>with</span>
          <div></div>
        </div>
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

      <p className='text-center'>
        <strong>or</strong>
      </p>

      <div className='signUp_links'>
        <SocialMediaLinks {...socialMediaIconsProps} />
      </div>
    </div>
  );
};

export default SignUpDecision;
