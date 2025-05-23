import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../data/mockData';

// PUBLIC_INTERFACE
/**
 * Recipe detail component for displaying full recipe information
 */
const RecipeDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  
  // Find recipe from mock data
  const recipe = recipes.find(r => r.id === parseInt(id));
  
  if (!recipe) {
    return <div className="container"><h2>Recipe not found</h2></div>;
  }
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    // In a real app, this would save to a database
    alert('Comment submitted! (This is just a mock implementation)');
    setComment('');
  };
  
  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <h1 className="recipe-title">{recipe.title}</h1>
        <div className="recipe-meta">
          <span className="recipe-rating">
            {'★'.repeat(Math.floor(recipe.rating))}
            {'☆'.repeat(5 - Math.floor(recipe.rating))}
            <span className="rating-number"> {recipe.rating}</span>
          </span>
          <span className="recipe-time">
            Prep: {recipe.prepTime} min | Cook: {recipe.cookTime} min
          </span>
        </div>
      </div>
      
      <div className="recipe-image-large">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      
      <div className="recipe-description">
        <p>{recipe.description}</p>
      </div>
      
      <div className="recipe-ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      
      <div className="recipe-instructions">
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      
      <div className="recipe-comments">
        <h2>Comments</h2>
        {recipe.comments && recipe.comments.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-header">
              <span className="comment-user">{comment.user}</span>
              <span className="comment-rating">{'★'.repeat(comment.rating)}</span>
            </div>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
        
        <form className="comment-form" onSubmit={handleSubmitComment}>
          <h3>Add a comment</h3>
          <div className="rating-select">
            <label>Rating:</label>
            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
              {[5, 4, 3, 2, 1].map(num => (
                <option key={num} value={num}>
                  {num} star{num !== 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this recipe..."
            required
          ></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RecipeDetail;
