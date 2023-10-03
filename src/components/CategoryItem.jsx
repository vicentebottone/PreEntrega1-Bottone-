


// eslint-disable-next-line no-unused-vars
const CategoryItem = ( { isActive = false, name} ) => {
  return (
    <a className={'nav-link ${isActive ? "active fw-bolder" : null}'} aria-current="page" href="#">{name}</a>
  );
};

export default CategoryItem;