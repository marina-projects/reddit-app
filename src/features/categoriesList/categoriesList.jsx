import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Div } from "../../styles";
import { selectCategories, loadCategories } from "./categoriesListSlice";
import { filterByCategory, resetFilter } from "../postList/postListSlice";

function CategoriesList() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleFilterByCategory = (id) => {
    if (id === "all") {
      dispatch(resetFilter()); // Сбрасываем фильтр
    } else {
      dispatch(filterByCategory(id)); // Фильтруем по категории
    }
  };

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <Div>
      <Div><h4 onClick={() => handleFilterByCategory("all")}>All Categories</h4></Div>
      {categories.map((category) => (
        <Div key={category.id}>
        <h4
          onClick={() => handleFilterByCategory(category.id)}
        >
          {category.title}
        </h4></Div>
      ))}
    </Div>
  );
}

export default CategoriesList;
