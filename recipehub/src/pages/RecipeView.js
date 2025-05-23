import React from 'react';
import RecipeDetail from '../components/RecipeDetail';

// PUBLIC_INTERFACE
/**
 * Recipe view page component for displaying a single recipe
 */
const RecipeView = () => {
  return (
    <div className="recipe-view-page">
      <RecipeDetail />
    </div>
  );
};

export default RecipeView;
