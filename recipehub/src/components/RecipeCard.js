import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Recipe card component for displaying recipe previews
 * @param {Object} recipe - Recipe object containing title, image, etc.
 */
const RecipeCard = ({ recipe }) => {
  if (!recipe) return null;
  
  const { id, title, image, prepTime, cookTime, rating } = recipe;
  
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${id}`} className="recipe-card-link">
        <div className="recipe-image">
          <img src={image} alt={title} />
        </div>
        <div className="recipe-info">
          <h3 className="recipe-title">{title}</h3>
          <div className="recipe-meta">
            <span className="recipe-time">
              {prepTime + cookTime} min
            </span>
            <span className="recipe-rating">
              {'★'.repeat(Math.floor(rating))}
              {'☆'.repeat(5 - Math.floor(rating))}
              <span className="rating-number"> {rating}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
