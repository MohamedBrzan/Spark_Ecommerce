import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TrackOrder.scss';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

const TrackOrder = () => {
  return (
    <div className='track_order'>
      <Container>
        <div className='title_plus'>
          <div className='line'></div>
          <h3>
            <strong>
              <small>Track Your Order</small>
            </strong>
          </h3>
          <div className='line'></div>
        </div>

        <Form>
          <Row>
            <Col>
              <FormGroup className='mb-3'>
                <FormLabel>Your E-Mail</FormLabel>
                <FormControl
                  type='email'
                  aria-label='email input'
                  placeholder='Enter Your E-Mail'
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className='mb-3'>
                <FormLabel>Order Code</FormLabel>
                <FormControl
                  type='text'
                  aria-label='order code input'
                  placeholder='Enter Your Order Code'
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type='submit' className='form_btn'>
            Track Order
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default TrackOrder;
