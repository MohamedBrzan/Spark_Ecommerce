import Container from 'react-bootstrap/Container';
import './FAQ.scss';
import CustomBreadCrumb from '../../components/CustomBreadCrumb/CustomBreadCrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from '../../assets/images/cart.svg';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const data = [
    {
      name: 'FAQ',
    },
  ];

  const questions = [
    {
      image: Image,
      question: 'Any thing ?',
      answer: 'This is the answer',
    },
    {
      image: Image,
      question: 'Any thing ?',
      answer: 'This is the answer',
    },
    {
      image: Image,
      question: 'Any thing ?',
      answer: 'This is the answer',
    },
    {
      image: Image,
      question: 'Any thing ?',
      answer: 'This is the answer',
    },
    {
      image: Image,
      question: 'Any thing ?',
      answer: 'This is the answer',
    },
    {
      image: Image,
      question: 'Any thing ?',
      answer: 'This is the answer',
    },
  ];
  return (
    <div className='faq'>
      <Container>
        <CustomBreadCrumb {...data} />
        <section className='head_section'>
          <div className='content'>
            <h6>
              <strong>
                <small>FAQS</small>
              </strong>
            </h6>
            <h2>
              <strong>Ask Us Anything</strong>
            </h2>
            <p>Have any questions? We're here to help assist you</p>
            <Col md={12}>
              <Form>
                <FormControl placeholder='Search here' />
              </Form>
            </Col>
          </div>
        </section>
        <section className='faq_section'>
          <Row>
            {questions.map(({ image, question, answer }, index) => (
              <Col md={4} key={index} className='faq_col'>
                <figure>
                  <img src={image} alt={question} />
                </figure>

                <h5 className='question'>
                  <strong>{question}</strong>
                </h5>

                <p className='answer'>{answer}</p>
              </Col>
            ))}
          </Row>
        </section>
        <div className='another_faq'>
          <Row>
            <Col md={6}>
              <h6>
                <strong>Still have a question ?</strong>
              </h6>
              <p>
                can't find the answer you're looking for ? Please chat to our
                friendly team.
              </p>
            </Col>
            <Col md={6}>
              <Link to='/contact_us' className='form_btn'>
                Get in touch
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
