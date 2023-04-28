import { Link } from 'react-router-dom';
import NavBtnProps from '../../../../../types/NavBtn';

const NavBtn = (props: NavBtnProps) => {
  const { text } = props;
  return (
    <Link to='/sign_in' className='nav_btn'>
      {text}
    </Link>
  );
};

export default NavBtn;
