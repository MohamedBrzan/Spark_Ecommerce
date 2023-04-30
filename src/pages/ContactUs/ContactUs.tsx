import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Stack,
} from 'react-bootstrap';
import './ContactUs.scss';
import CustomBreadCrumb from '../../components/CustomBreadCrumb/CustomBreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const BreadcrumbData = [
    {
      name: 'Home',
      active: true,
      link: '/',
    },

    {
      name: 'Contact Us',
    },
  ];

  return (
    <div className='contact_us'>
      <Container>
        <Row>
          <CustomBreadCrumb {...BreadcrumbData} />
        </Row>
        <div className='title'>
          <h3>
            <strong>Contact Info</strong>
          </h3>
          <div className='line'></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          accusamus enim fuga voluptatem sint delectus ratione iure
        </p>

        <Stack direction='horizontal' gap={2} className='info'>
          <Col xs={12} md={6} lg={4} className='info_card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faAddressCard} size='2xl' />
            </div>
            <p className='address'>
              <strong>Address</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusamus enim fuga voluptatem sint delectus ratione iure
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className='info_card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faPhone} size='2xl' />
            </div>
            <p className='address'>
              <strong>Phone Number</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusamus enim fuga voluptatem sint delectus ratione iure
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className='info_card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faMailBulk} size='2xl' />
            </div>
            <p className='address'>
              <strong>E-Mail Address</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusamus enim fuga voluptatem sint delectus ratione iure
            </p>
          </Col>
        </Stack>

        <div className='title'>
          <h3>
            <strong>Send Us a Message</strong>
          </h3>
          <div className='line'></div>
        </div>

        <Form>
          <FormGroup className='mb-3'>
            <FormLabel>Name :</FormLabel>
            <FormControl
              type='text'
              placeholder='Enter Your Name'
              aria-label='Write Your Name'
              required
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormLabel>E-Mail :</FormLabel>
            <FormControl
              type='email'
              placeholder='Enter Your Email'
              aria-label='Write Your Email'
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Message :</FormLabel>
            <FormControl
              as='textarea'
              type='text'
              rows={5}
              placeholder='Write Your Message'
              aria-label='Write Your Message'
              required
            />
          </FormGroup>
          <Button type='submit' className='form_btn'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
