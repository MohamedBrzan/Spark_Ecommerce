import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Address = () => {
  const data = [
    {
      location: 'Home Address',
      buyer: 'Mohamed',
      country: 'United States',
      city: 'San Francisco',
      street: '123 Street',
    },
    {
      location: 'Work Address',
      buyer: 'Ali',
      country: 'Colombia',
      city: 'Colombia City',
      street: '123 Street',
    },
    {
      location: 'Family Address',
      buyer: 'Mazen',
      country: 'Cairo',
      city: 'Tanta',
      street: '123 Street',
    },
    {
      location: 'Friends Address',
      buyer: 'MoMO',
      country: 'Morocco',
      city: 'Maraqesh',
      street: '123 Street',
    },
  ];
  return (
    <section className='address' id='address'>
      <div className='title'>
        <h3>
          <strong>My Address</strong>
        </h3>
        <div className='line'></div>
      </div>
      <Row>
        {data.map(({ location, buyer, country, city, street }, index) => (
          <Col xs={12} lg={5} key={index} className='address_col'>
            <h6>
              <span>Location :</span> {location}
            </h6>
            <p>
              <span>buyer:</span> {buyer}
            </p>
            <p>
              <span>country: </span>
              {country}
            </p>
            <p>
              <span>city:</span> {city}
            </p>
            <p>
              <span>street:</span> {street}
            </p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Address;
