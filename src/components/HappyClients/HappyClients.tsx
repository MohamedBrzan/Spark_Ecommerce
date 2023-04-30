import { Col, Container, Row, Stack } from 'react-bootstrap';

import TestimonialsType from '../../types/TestimonialsType';

import './HappyClients.scss';
import Rating from '../Rating/Rating';

const HappyClients = (props: TestimonialsType[]) => {
  return (
    <div className='happy_clients'>
      <Container>
        <Stack direction='horizontal' gap={1}>
          {Object.values(props).map(({ image, name, rate, desc }, index) => (
            <Row key={index} className='content_col'>
              <Col>
                <figure>
                  <img src={image} alt={name} title={name} />
                </figure>
              </Col>
              <Col>
                <h5>{name}</h5>
              </Col>
              <Col>
                <Rating rate={rate} />
              </Col>
              <p className='desc'>{desc}</p>
            </Row>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default HappyClients;
