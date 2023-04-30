import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FeatureDisplaySection.scss';
import Feature from '../../types/Feature';

type FeatureDisplaySectionType = {
  features: Feature[];
  name: string;
};

const FeatureDisplaySection = (props: FeatureDisplaySectionType) => {
  const { features, name } = props;

  return (
    <section className='features'>
      <div className='title_plus'>
        <div className='line'></div>
        <h3>{name}</h3>
        <div className='line'></div>
      </div>
      <Container>
        <Row>
          {features.map(({ image, title, desc }, index) =>
            title ? (
              <Col xs={12} md={6} lg={3} className='content_col' key={index}>
                <figure>
                  <img src={image} alt='Feature Image.' title={title} />
                </figure>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Col>
            ) : (
              <Col xs={12} md={6} lg={3} className='content_col' key={index}>
                <figure className='brand'>
                  <img src={image} alt='Feature Image.' title={title} />
                </figure>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureDisplaySection;
