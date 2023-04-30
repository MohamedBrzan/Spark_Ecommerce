import { Link } from 'react-router-dom';

const PagesLinks = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const elements = document.querySelectorAll('.links li.link');

    elements.forEach((link) => {
      link.classList.remove('active');
    });

    const ele = (e.target as HTMLAnchorElement).parentElement as HTMLElement;

    ele.classList.add('active');
  };

  return (
    <ul className='list-unstyled links'>
      <li className='link active'>
        <Link to='/' onClick={handleClick}>
          Home
        </Link>
      </li>
      <li className='link'>
        <Link to='/categories' onClick={handleClick}>
          Categories
        </Link>
      </li>
      <li className='link'>
        <Link to='/about_us' onClick={handleClick}>
          About Us
        </Link>
      </li>
      <li className='link'>
        <Link to='/contact_us' onClick={handleClick}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default PagesLinks;
