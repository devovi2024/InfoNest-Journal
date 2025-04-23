import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category}`}>
      <button className="category-btn">{category}</button>
    </Link>
  );
};

export default CategoryCard;
