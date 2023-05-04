import PagesLinks from './helpers/PagesLinks';
import NavIcons from './helpers/NavIcons';
import NavBtn from './helpers/NavBtn';
import OffCanvas from '../../../OffCanvas';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const text = {
    text: 'Login',
  };
  return (
    <nav className='navbar'>
      <h1 className='logo'>
        <Link to='/'>
          <strong>Spark</strong>
        </Link>
      </h1>
      <PagesLinks />
      <NavIcons />
      <NavBtn {...text} />
      <OffCanvas />
    </nav>
  );
};

export default Navbar;
