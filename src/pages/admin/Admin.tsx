import Container from 'react-bootstrap/Container';
import CustomBreadCrumb from '../../components/CustomBreadCrumb/CustomBreadCrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Admin.scss';
import ListSection from './helpers/ListSection';
import Profile from './sections/Profile/Profile';
import Orders from './sections/Orders/Orders';
import Address from './sections/Address';
import Cards from './sections/Cards';
import Languages from './sections/Languages';

const Admin = () => {
  const data = [
    {
      name: 'My Profile',
    },
  ];

  return (
    <div className='admin'>
      <Container>
        <CustomBreadCrumb {...data} />
        <Row>
          <Col md={4} lg={2}>
            <ListSection />
          </Col>

          <Col md={8} lg={10}>
            <article className='content'>
              <Profile />
              <Orders />
              <Address />
              <Cards />
              <Languages />
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
