import Container from 'react-bootstrap/Container';
import './TermsAndConditions.scss';
import CustomBreadCrumb from '../../components/CustomBreadCrumb/CustomBreadCrumb';

const TermsAndConditions = () => {
  const data = [
    {
      name: 'Terms and conditions',
    },
  ];
  return (
    <div className='termsAndConditions'>
      <Container>
        <CustomBreadCrumb {...data} />
        <div className='title'>
          <h3>
            <strong>Terms and Conditions</strong>
          </h3>
          <div className='line'></div>
        </div>

        <h5>
          <strong>1. Terms</strong>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          explicabo optio at, omnis laudantium inventore recusandae libero
          impedit aspernatur ipsum quae quisquam fugiat nostrum minima
          consectetur hic exercitationem autem placeat.
        </p>
        <h5>
          <strong>2. License</strong>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          explicabo optio at, omnis laudantium inventore recusandae libero
          impedit aspernatur ipsum quae quisquam fugiat nostrum minima
          consectetur hic exercitationem autem placeat.
        </p>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
