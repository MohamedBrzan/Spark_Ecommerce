import CardInterface from '../../types/Card';
import CardImage from '../../assets/images/src1.jpg';
import Rating from '../Rating/Rating';
import RatingType from '../../types/RatingType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { CardImg } from 'react-bootstrap';

import './CustomCard.scss';

const CustomCard = (props: CardInterface) => {
  const { image, sale, title, category, rate, price, count } = props;

  const rating: RatingType = {
    rate,
  };

  return (
    <Card className='custom_card'>
      <CardImg src={CardImage || image} alt='Card Image.' />

      <p>{category}</p>
      <h5>
        <strong>{title}</strong>
      </h5>

      <Rating {...rating} />

      {sale && <div className='sale'>Sale</div>}

      <p className='my-auto'>
        <strong>{price}$</strong>
      </p>

      <p>{count}</p>

      <div className='cart_btn'>
        <FontAwesomeIcon icon={faCartShopping} /> <span>Add to cart</span>
      </div>
    </Card>
  );
};

export default CustomCard;
