import PagesLinks from './helpers/PagesLinks';
import NavIcons from './helpers/NavIcons';
import NavBtn from './helpers/NavBtn';
import OffCanvas from '../../../OffCanvas';
import NavBtnProps from '../../../../types/NavBtn';

const Navbar = () => {
  const text: NavBtnProps = {
    text: 'Login',
  };
  return (
    <nav className='navbar'>
      <h1 className='logo'>
        <strong>Spark</strong>
      </h1>
      <PagesLinks />
      <NavIcons />
      <NavBtn {...text} />
      <OffCanvas />
    </nav>
  );
};

export default Navbar;
