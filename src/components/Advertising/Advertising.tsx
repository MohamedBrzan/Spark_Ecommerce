import Container from 'react-bootstrap/Container';
import gustavo from '../../assets/images/gustavo.jpg';

import './Advertising.scss';

const Advertising = () => {
  return (
    <section className='advertising'>
      <Container>
        <figure>
          <img src={gustavo} alt='Ad Image' />
        </figure>

        <div className='content'>
          <p>
            <strong>Winter</strong>
          </p>
          <p>
            <strong>Collections</strong>
          </p>
          <p>
            <strong>Shop Now!</strong>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Advertising;
