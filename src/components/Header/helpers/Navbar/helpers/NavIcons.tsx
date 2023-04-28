import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const NavIcons = () => {
  return (
    <ul className='list-unstyled shorts'>
      <li>
        <FontAwesomeIcon icon={faSearch} />
      </li>
      <li>
        <FontAwesomeIcon icon={faHeart} />
      </li>
      <li>
        <FontAwesomeIcon icon={faCartShopping} />
      </li>
    </ul>
  );
};

export default NavIcons;
