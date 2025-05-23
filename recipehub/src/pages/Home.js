import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/mockData';

// PUBLIC_INTERFACE
/**
 * Home page component for RecipeHub
 */
const Home = () => {
  // Get featured recipes (in this mock, we'll just take the highest rated)
  const featuredRecipes = [...recipes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  
  // Get recently added recipes (in this mock, we'll just take the last few)
  const recentRecipes = [...recipes].slice(-4);
  
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find & Share Amazing Recipes</h1>
          <p className="hero-description">
            Discover delicious recipes, create your own collections, and connect with other food lovers.
          </p>
          <Link to="/search" className="btn btn-large">Browse All Recipes</Link>
        </div>
      </div>
      
      <div className="featured-section">
        <h2 className="section-title">Featured Recipes</h2>
        <div className="recipe-grid">
          {featuredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
      
      <CategoryList />
      
      <div className="recent-section">
        <h2 className="section-title">Recently Added</h2>
        <div className="recipe-grid">
          {recentRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
