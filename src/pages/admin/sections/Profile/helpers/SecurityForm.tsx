import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SecurityForm = () => {
  return (
    <Form className='mb-3'>
      <Row>
        <Col xs={12} md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>E-Mail</FormLabel>
            <FormControl type='email' required />
          </FormGroup>
        </Col>
        <Col xs={12} md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>Password</FormLabel>
            <FormControl type='password' required />
          </FormGroup>
        </Col>
      </Row>
      <Button className='form_btn' type='submit'>
        Update
      </Button>
    </Form>
  );
};

export default SecurityForm;
