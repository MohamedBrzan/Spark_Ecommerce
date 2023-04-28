import { useRef, MutableRefObject, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../assets/images/cloth1.jpg';
import './Categories.scss';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import Category from './Category';
const Categories = () => {
  const products = useRef() as MutableRefObject<HTMLDivElement>;
  const btnOne = useRef() as MutableRefObject<HTMLDivElement>;
  const btnTwo = useRef() as MutableRefObject<HTMLDivElement>;

  const data = [
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
    { image: Image, name: 'Category a' },
  ];

  const handleIncrease = () => {
    document
      .querySelectorAll<HTMLElement>(
        '.categories_section .categories .category'
      )
      .forEach((category) => {
        category.style.transform = 'translateX(' + -100 + '%)';
      });
  };

  const handleDecrease = () => {
    document
      .querySelectorAll<HTMLElement>(
        '.categories_section .categories .category'
      )
      .forEach((category) => {
        category.style.transform = 'translateX(' + 100 + '%)';
      });
  };

  useMemo(() => handleIncrease, []);
  useMemo(() => handleDecrease, []);

  return (
    <section className='categories_section'>
      {' '}
      <div className='buttons'>
        {' '}
        <div ref={btnOne} onClick={handleIncrease}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
        <div ref={btnTwo} onClick={handleDecrease}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
      </div>
      <div className='categories' ref={products}>
        {data.map(({ image, name }, index) => (
          <Category {...{ image, name, index }} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
