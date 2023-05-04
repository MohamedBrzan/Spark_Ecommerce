import BillingDetails from './helpers/BillingDetails';
import Container from 'react-bootstrap/Container';

import './CheckOut.scss';

const CheckOut = () => {
  return (
    <div className='check_out'>
      <Container>
        <BillingDetails />
      </Container>
    </div>
  );
};

export default CheckOut;
