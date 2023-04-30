import { Link } from 'react-router-dom';

export type NavBtnType = {
  text: string;
};

const NavBtn = (props: NavBtnType) => {
  const { text } = props;
  return (
    <Link to='/sign_in' className='nav_btn'>
      {text}
    </Link>
  );
};

export default NavBtn;
