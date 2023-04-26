import { useRef, useEffect, MutableRefObject } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Lock from '../assets/images/Auth/lock.png';
import Man from '../assets/images/Auth/man.png';

import './Auth.scss';
import { Link } from 'react-router-dom';
const Verification = () => {
  const formOneRef = useRef() as MutableRefObject<HTMLInputElement>;
  const formTwoRef = useRef() as MutableRefObject<HTMLInputElement>;
  const formThreeRef = useRef() as MutableRefObject<HTMLInputElement>;
  const formFourRef = useRef() as MutableRefObject<HTMLInputElement>;
  const formFiveRef = useRef() as MutableRefObject<HTMLInputElement>;

  const ValidationNumbers = () => {
    const allInputs = document.querySelectorAll(
      '.code_validation .validation .validate_section .validation_input_number'
    );

    allInputs.forEach((input, index) => {
      input.addEventListener('input', (e: any) => {
        if (e.inputType === 'insertText') {
          e.target.disabled = true;
          e.target.form[index + 1].disabled = false;
          e.target.form[index + 1].focus();
        }
      });
    });
  };

  useEffect(() => {
    ValidationNumbers();
  }, []);
  return (
    <div className='code_validation'>
      <Row className='validation'>
        <Col className='man_img_col' md={6} lg={4}>
          {' '}
          <figure className='man_image'>
            <img src={Man} alt='Man Image.' />
          </figure>
        </Col>
        <Col md={6} lg={8}>
          <section className='validate_section'>
            <figure className='lock_image'>
              <img src={Lock} alt='Lock Image.' />
            </figure>
            <h1>Validation</h1>
            <Form>
              <div className='input_group'>
                <FormGroup>
                  <FormControl
                    type='number'
                    className='validation_input_number'
                    ref={formOneRef}
                    min={0}
                    max={1}
                    autoFocus
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type='number'
                    className='validation_input_number'
                    ref={formTwoRef}
                    min={0}
                    max={1}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type='number'
                    className='validation_input_number'
                    ref={formThreeRef}
                    min={0}
                    max={1}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type='number'
                    className='validation_input_number'
                    ref={formFourRef}
                    min={0}
                    max={1}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type='number'
                    className='validation_input_number'
                    ref={formFiveRef}
                    min={0}
                    max={1}
                    disabled
                  />
                </FormGroup>
              </div>
              <Button className='d-block m-auto my-5 form_btn'>Verify</Button>
            </Form>
            <Link to='/'>send code again</Link>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Verification;
