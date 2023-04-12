import React from "react";

function CategoryFilter({categories, selectedCategories, setSelectedCategories}) {

  const buttons = categories.map(category =>{
    const className = category === selectedCategories ? "selected": ""
    return(
      <button 
        key={category}
        className={className}
        onClick={()=> setSelectedCategories(category)}
      >
        {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
