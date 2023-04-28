import Container from 'react-bootstrap/Container';

import './Header.scss';
import Info from './helpers/Info';
import Navbar from './helpers/Navbar/Navbar';

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Info />
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
