import React from 'react';
import { Link } from 'react-router-dom';
import { collections, recipes } from '../data/mockData';

// PUBLIC_INTERFACE
/**
 * Collections component for managing user's recipe collections
 */
const Collections = () => {
  // Function to get recipes for a collection
  const getCollectionRecipes = (collectionId) => {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return [];
    
    return collection.recipes.map(recipeId => 
      recipes.find(recipe => recipe.id === recipeId)
    ).filter(Boolean);
  };
  
  return (
    <div className="collections-container">
      <h1 className="section-title">My Collections</h1>
      
      {collections.length === 0 ? (
        <div className="empty-state">
          <p>You don't have any collections yet.</p>
          <Link to="/" className="btn">Browse Recipes</Link>
        </div>
      ) : (
        <div className="collections-list">
          {collections.map(collection => (
            <div key={collection.id} className="collection-card">
              <h2 className="collection-title">{collection.name}</h2>
              <p className="collection-description">{collection.description}</p>
              
              <div className="collection-recipes">
                {getCollectionRecipes(collection.id).map(recipe => (
                  <div key={recipe.id} className="collection-recipe-item">
                    <Link to={`/recipe/${recipe.id}`} className="collection-recipe-link">
                      <div className="collection-recipe-image">
                        <img src={recipe.image} alt={recipe.title} />
                      </div>
                      <span className="collection-recipe-title">{recipe.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="collection-actions">
        <button className="btn">Create New Collection</button>
      </div>
    </div>
  );
};

export default Collections;
