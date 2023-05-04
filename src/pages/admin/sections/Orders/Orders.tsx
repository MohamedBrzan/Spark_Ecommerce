// import NoOrders from './helpers/NoOrders';
import Table from 'react-bootstrap/Table';
import Image from '../../../../assets/images/cloth1.jpg';
import { Col, Row } from 'react-bootstrap';

const Orders = () => {
  const data = [
    {
      image: Image,
      title: 'title',
      desc: 'Description',
      date: new Date(Date.now()).toISOString(),
      summary: '3 items',
      status: 'Delivered',
      amount: 324,
    },
    {
      image: Image,
      title: 'title',
      desc: 'Description',
      date: new Date(Date.now()).toISOString(),
      summary: '3 items',
      status: 'Pending',
      amount: 453,
    },
    {
      image: Image,
      title: 'title',
      desc: 'Description',
      date: new Date(Date.now()).toISOString(),
      summary: '3 items',
      status: 'Canceled',
      amount: 675,
    },
  ];
  return (
    <section className='orders' id='orders'>
      <div className='title'>
        <h3>
          <strong>My Orders</strong>
        </h3>
        <div className='line'></div>
      </div>
      {/* <NoOrders /> */}
      <Table striped bordered hover responsive>
        {' '}
        <thead>
          <tr>
            <th>
              <small>Product</small>
            </th>
            <th>
              <small>Order Date</small>
            </th>
            <th>
              <small>Order Summary</small>
            </th>
            <th>
              <small>Status</small>
            </th>
            <th>
              <small>Amount</small>
            </th>
          </tr>
        </thead>
        {data.map(
          ({ image, title, desc, date, summary, status, amount }, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  <Row>
                    <Col>
                      <figure className='order'>
                        <img src={image} alt='This is image' />
                      </figure>
                    </Col>
                    <Col>
                      <h6>
                        <strong>{title}</strong>
                      </h6>
                      <p>{desc}</p>
                    </Col>
                  </Row>
                </td>

                <td>
                  <time>{date}</time>
                </td>
                <td>{summary}</td>
                <td>
                  <Col>
                    {' '}
                    {status === 'Delivered' ? (
                      <span className='green'>
                        <strong>{status}</strong>
                      </span>
                    ) : status === 'Pending' ? (
                      <span className='grey'>{status}</span>
                    ) : (
                      <span className='red'>{status}</span>
                    )}
                  </Col>
                </td>
                <td>
                  <strong>{amount}$</strong>
                </td>
              </tr>
            </tbody>
          )
        )}
      </Table>
    </section>
  );
};

export default Orders;
