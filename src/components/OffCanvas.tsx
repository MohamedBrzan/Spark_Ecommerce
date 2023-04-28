import { useState } from 'react';
import HamburgerMenu from '../assets/images/menu.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PagesLinks from './Header/helpers/Navbar/helpers/PagesLinks';
import NavIcons from './Header/helpers/Navbar/helpers/NavIcons';
import NavBtn, { NavBtnProps } from './Header/helpers/Navbar/helpers/NavBtn';

function OffCanvas() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const text: NavBtnProps = {
    text: 'Login',
  };

  return (
    <>
      <div className='hamburger_menu_icon' onClick={handleShow}>
        <img src={HamburgerMenu} alt='Hamburger Menu.' width={50} />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <PagesLinks />
          <NavIcons />
          <NavBtn {...text} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
