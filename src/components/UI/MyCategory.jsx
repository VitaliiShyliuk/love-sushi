import React from "react";
import MyButton from "./MyButton";

const MyCategory = ({ categoriesData, category, onClick, className }) => {
  return (
    <div className={className}>
      {categoriesData.map((categoryData) => (
        <MyButton
          title={categoryData.name}
          key={categoryData.value}
          className={
            category === categoryData.value
              ? "category__button button-category active"
              : "category__button button-category"
          }
          value={categoryData.value}
          onClick={(e) => onClick(e.target.value)}
        >
          <img
            height={25}
            src={categoryData.image}
            alt={categoryData.name}
          />
        </MyButton>
      ))}
    </div>
  );
};

export default MyCategory;
