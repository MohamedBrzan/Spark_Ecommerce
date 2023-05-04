const ListSection = () => {
  const handleSelectSection = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const items = document.querySelectorAll('.admin .list_section .item');
    const sections = document.querySelectorAll(
      '.admin article.content section'
    );

    items.forEach((item) => item.classList.remove('active'));
    sections.forEach((section) => {
      section.classList.remove('active');
      const myEle = e.target as HTMLDivElement;

      if (section.getAttribute('id') === myEle.getAttribute('data-section')) {
        myEle.classList.add('active');
        section.classList.add('active');
      }
    });
  };

  return (
    <section className='list_section'>
      <h6>
        <strong>username</strong>
      </h6>
      <h6 className='email'>
        <strong>email@gmail.com</strong>
      </h6>
      <div className='list'>
        <h5
          className='item active'
          data-section='profile'
          onClick={handleSelectSection}
        >
          Profile
        </h5>

        <h5
          className='item'
          data-section='orders'
          onClick={handleSelectSection}
        >
          My Orders
        </h5>

        <h5
          className='item'
          data-section='address'
          onClick={handleSelectSection}
        >
          Address
        </h5>

        <h5 className='item' data-section='cards' onClick={handleSelectSection}>
          Saved Cards
        </h5>

        <h5
          className='item'
          data-section='languages'
          onClick={handleSelectSection}
        >
          Languages
        </h5>

        <h5 className='item'>Sign Out</h5>
      </div>
    </section>
  );
};

export default ListSection;
