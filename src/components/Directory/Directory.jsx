import React from 'react';
import CategoryItem from '../Category/CategoryItem';

const Directory = ({ categoriesA }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {categoriesA.map((category) => (
        <CategoryItem key={category.id} categoryA={category} />
      ))}
    </div>
  );
};

export default Directory;
