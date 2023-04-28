import CategoryType from '../../types/CategoryType';

const Category = (props: CategoryType) => {
  const { image, name } = props;

  return (
    <div className='category'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <h6>{name}</h6>
    </div>
  );
};

export default Category;
