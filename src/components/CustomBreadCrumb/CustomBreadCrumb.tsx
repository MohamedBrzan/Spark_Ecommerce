import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadCrumbType from '../../types/BreadCrumbType';
import { Link } from 'react-router-dom';
import './CustomBreadcrumb.scss';

const CustomBreadCrumb = (props: BreadCrumbType[]) => {
  return (
    <Breadcrumb className='CustomBreadcrumb'>
      {Object.values(props).map(({ name, active, link }, index) =>
        active ? (
          <Breadcrumb.Item active key={index}>
            <Link to={`${link}`}>{name}</Link>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>
        )
      )}
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;
