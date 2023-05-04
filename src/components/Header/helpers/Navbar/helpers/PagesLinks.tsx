import { Link } from 'react-router-dom';

const PagesLinks = () => {
  const handleClick: any = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
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
      <li className='link'>
        <Link to='/check_out' onClick={handleClick}>
          Check Out
        </Link>
      </li>
      <li className='link'>
        <Link to='/order_confirmed' onClick={handleClick}>
          Order Confirmed
        </Link>
      </li>
      <li className='link'>
        <Link to='/faq' onClick={handleClick}>
          FAQ
        </Link>
      </li>
      <li className='link'>
        <Link to='/terms_conditions' onClick={handleClick}>
          Terms&Conditions
        </Link>
      </li>
      <li className='link'>
        <Link to='/admin' onClick={handleClick}>
          Admin
        </Link>
      </li>
    </ul>
  );
};

export default PagesLinks;
