import { Link } from 'react-router-dom';
import NoOrdersImg from '../../../../../assets/images/noorder.svg';

const NoOrders = () => {
  return (
    <div className='no_orders'>


      <figure>
        <img src={NoOrdersImg} alt='No Orders' />
      </figure>
      <h2>
        <strong>No Orders Yet</strong>
      </h2>

      <Link to='/' className='form_btn'>
        Shop Now
      </Link>
    </div>
  );
};

export default NoOrders;
