import Button from 'react-bootstrap/Button';
import signUpImage from '../assets/images/Auth/singup.jpg';
import './Auth.scss';
import SocialMediaLinks from '../components/SocialMediaLinks/SocialMediaLinks';
import { socialMediaIconsProps } from './SignIn';
const SignUp = () => {
  return (
    <div className='auth sign_up'>
      <figure className='sing_up'>
        <img src={signUpImage} alt='Sign Up Image.' />
      </figure>

      <div className='page_name'>
        <h1 className='sing_up_txt'>Sign Up</h1>
        <p className='lines_word orange'>with</p>
      </div>

      <div className='buttons'>
        <Button className='signUp_btn'>Mobile Number</Button>
        <Button className='signUp_btn'>Email</Button>
      </div>

      <p>
        <strong>or</strong>
      </p>

      <div className='signUp_links'>
        <SocialMediaLinks {...socialMediaIconsProps} />
      </div>
    </div>
  );
};

export default SignUp;
