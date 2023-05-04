import GeneralForm from './helpers/GeneralForm';
import SecurityForm from './helpers/SecurityForm';

const Profile = () => {
  return (
    <section className='profile active' id='profile'>
      <div className='title'>
        <h3>
          <strong>Profile</strong>
        </h3>
        <div className='line'></div>
      </div>

      <div className='form_sec'>
        <h4>
          <strong>
            <small>General info</small>
          </strong>
        </h4>
        <GeneralForm />
      </div>
      <div className='form_sec'>
        <h4>
          <strong>
            <small>Security</small>
          </strong>
        </h4>
        <SecurityForm />
      </div>
    </section>
  );
};

export default Profile;
