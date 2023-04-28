import { Link } from 'react-router-dom';

const PagesLinks = () => {
  return (
    <ul className='list-unstyled links'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/categories'>Categories</Link>
      </li>
      <li>
        <Link to='/about_us'>About Us</Link>
      </li>
      <li>
        <Link to='/contact_us'>Contact Us</Link>
      </li>
    </ul>
  );
};

export default PagesLinks;
