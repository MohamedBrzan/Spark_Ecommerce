import { useRef, useState, RefObject, useMemo, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Collection1 from '../../assets/images/collection1.jpg';
import './CategoryPage.scss';
import CustomBreadCrumb from '../../components/CustomBreadCrumb/CustomBreadCrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CategoryPage = () => {
  const progressRef = useRef(null) as RefObject<HTMLDivElement>;
  const [minVal, setMinVal] = useState<number>(300);
  const [maxVal, setMaxVal] = useState<number>(600);
  const minRange = 0;
  const maxRange = 1000;

  const data = [
    {
      name: 'categories',
    },
    {
      name: 'fashion',
    },
  ];

  const categories = [
    "Women's Clothes",
    "Men's Clothes",
    'Accessories',
    'Bags & Shoes',
    'Electronics',
    'Musics',
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(
    () =>
      (
        e: React.ChangeEvent<HTMLInputElement>,
        dispatch: React.Dispatch<React.SetStateAction<number>>
      ) => {
        const ele = e.target as HTMLInputElement;
        const convertVal = Number(ele.value);
        dispatch(convertVal);
        const progress = document.getElementById('progress_bar');
        const leftVal = (minVal / maxRange) * 100 + '%';
        const rightVal = 100 - (maxVal / maxRange) * 100 + '%';

        progress.style.left = leftVal;
        progress.style.right = rightVal;
      },
    [maxVal, minVal]
  );

  return (
    <div className='category_page'>
      <Container>
        <figure>
          <img src={Collection1} alt='Collection' />
        </figure>
        <CustomBreadCrumb {...data} />
        <Row>
          <Col md={4} className='parts_col'>
            <section className='categories'>
              <h5 className='title'>
                <strong>Categories</strong>
              </h5>
              {categories.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
            </section>
            <section className='price'>
              <h5 className='title'>Price</h5>
              <div className='price_pieces'>
                <div className='min_value'>
                  <input
                    type='number'
                    name='min_val'
                    id='min_val'
                    min={minRange}
                    max={maxRange}
                    value={minVal}
                    disabled
                  />
                </div>
                <span className='px-1'></span>
                <div className='range_slider'>
                  <div
                    className='progress'
                    ref={progressRef}
                    id='progress_bar'
                  ></div>

                  <input
                    onChange={(e) => handleChange(e, setMinVal)}
                    type='range'
                    name='min'
                    id='min'
                    min={minRange}
                    max={maxRange}
                    value={minVal}
                  />
                  <input
                    onChange={(e) => handleChange(e, setMaxVal)}
                    type='range'
                    name='max'
                    id='max'
                    min={minRange}
                    max={maxRange}
                    value={maxVal}
                  />
                </div>

                <span className='px-1'></span>
                <div className='max_value'>
                  <input
                    type='number'
                    name='max_val'
                    id='max_val'
                    min={minRange}
                    max={maxRange}
                    value={maxVal}
                    disabled
                  />
                </div>
              </div>
            </section>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPage;
