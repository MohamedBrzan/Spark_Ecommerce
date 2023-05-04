import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormSelect from 'react-bootstrap/FormSelect';
import Row from 'react-bootstrap/Row';

import CustomBreadCrumb from '../../../components/CustomBreadCrumb/CustomBreadCrumb';

const BillingDetails = () => {
  const data = [
    {
      name: 'Cart',
      active: true,
      link: '/cart',
    },
    {
      name: 'Check Out',
    },
  ];

  return (
    <section className='billing_details'>
      <CustomBreadCrumb {...data} />
      <div className='title'>
        <h3>
          <strong>Billing Details</strong>
        </h3>
        <div className='line'></div>
      </div>

      <Form>
        <Row>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='write your first name'>
                First Name
              </FormLabel>
              <FormControl
                className='mb-3'
                type='text'
                placeholder='Enter Your First Name'
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='write your last name'>Last Name</FormLabel>
              <FormControl
                type='text'
                placeholder='Enter Your Last Name'
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='write your country'>
                Country/Region
              </FormLabel>
              <FormSelect required>
                <option value='1'>Egypt</option>
              </FormSelect>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='write your town'>Town</FormLabel>
              <FormSelect aria-label='town input' required>
                <option value='1'>Tanta</option>
              </FormSelect>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='write your street address'>
                Street Address
              </FormLabel>
              <FormControl
                type='text'
                aria-label='street address input'
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='write your phone number'>
                Phone Number
              </FormLabel>
              <FormControl
                type='number'
                aria-label='phone number input'
                required
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='write your order note'>
                Order Note
              </FormLabel>
              <FormControl
                as='textarea'
                rows={5}
                aria-label='order note textarea'
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className='form_btn'>Next</Button>
      </Form>
    </section>
  );
};

export default BillingDetails;
