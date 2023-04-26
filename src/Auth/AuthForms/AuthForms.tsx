import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

const AuthForms = () => {
  return (
    <Form>
      <Row>
        <Col>
          <FormGroup className='mb-3'>
            <FormLabel aria-label='First Name Label'>
              <small>First Name</small>{' '}
            </FormLabel>
            <FormControl
              type='text'
              required
              aria-label='First Name Input'
              placeholder='Enter Your First Name'
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className='mb-3'>
            <FormLabel aria-label='Last Name Label'>
              <small>Last Name</small>{' '}
            </FormLabel>
            <FormControl
              type='text'
              required
              aria-label='Last Name Input'
              placeholder='Enter Your Last Name'
            />
          </FormGroup>
        </Col>

        <FormGroup className='mb-3'>
          <FormLabel aria-label='Email Label'>
            <small>Email Address</small>
          </FormLabel>
          <FormControl
            type='email'
            required
            aria-label='Email Input'
            placeholder='Enter Your Email'
          />
        </FormGroup>

        <Row className='m-0 p-0'>
          <Col>
            <FormGroup className='mb-3'>
              <FormLabel aria-label='Password Label'>
                {' '}
                <small>Password</small>
              </FormLabel>
              <FormControl
                type='password'
                required
                aria-label='Password Input'
                placeholder='Enter Your Password'
              />
            </FormGroup>
          </Col>
          <Col>
            {' '}
            <FormGroup className='mb-3'>
              <FormLabel aria-label='Confirm Password Label'>
                <small>Confirm Password</small>
              </FormLabel>
              <FormControl
                type='password'
                required
                aria-label='Confirm Password Input'
                placeholder='Confirm Your Password'
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <small>
            <FormCheck
              required
              aria-label='Password Input'
              label='Keep me signed in'
            />
          </small>
        </FormGroup>

        <Button className='form_btn'>Sign Up</Button>
        <div className='text-center'>
          <Link to='/sign_in'>I have an account Already!</Link>
        </div>
      </Row>
    </Form>
  );
};

export default AuthForms;
