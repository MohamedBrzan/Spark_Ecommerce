import Button from 'react-bootstrap/Button';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import signUpImage from '../assets/images/Auth/singup.jpg';
import './Auth.scss';
const SignUp = () => {
  return (
    <div className='auth sign_up'>
      <figure className='sing_up'>
        <img src={signUpImage} alt='Sign Up Image.' />
      </figure>

      <div className='page_name'>
        <h1 className='sing_up_txt'>Sign Up</h1>
        <p className=''>with</p>
      </div>

      <div className='buttons'>
        <Button className='signUp_btn'>Mobile Number</Button>
        <Button className='signUp_btn'>Email</Button>
      </div>

      <p>
        <strong>or</strong>
      </p>

      <div className='signUp_links'>
        <BsFacebook size={50} />
        <FcGoogle size={50} />
        <BsApple size={50} />
      </div>
    </div>
  );
};

export default SignUp;
