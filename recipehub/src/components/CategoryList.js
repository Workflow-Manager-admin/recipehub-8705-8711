import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';

// PUBLIC_INTERFACE
/**
 * Category list component for displaying recipe categories
 */
const CategoryList = () => {
  return (
    <div className="category-list">
      <h2 className="section-title">Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link 
            to={`/search?category=${category.id}`}
            key={category.id}
            className="category-item"
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
