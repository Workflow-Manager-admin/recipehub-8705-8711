import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import CategoryList from '../components/CategoryList';
import { recipes, categories } from '../data/mockData';

// PUBLIC_INTERFACE
/**
 * Search page component for displaying search results
 */
const Search = () => {
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get('q') || '';
  const categoryId = searchParams.get('category') ? parseInt(searchParams.get('category')) : null;
  
  const filteredRecipes = useMemo(() => {
    let results = [...recipes];
    
    // Filter by category if specified
    if (categoryId) {
      results = results.filter(recipe => recipe.category === categoryId);
    }
    
    // Filter by search query if specified
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      results = results.filter(recipe => 
        recipe.title.toLowerCase().includes(lowercaseQuery) || 
        recipe.description.toLowerCase().includes(lowercaseQuery) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(lowercaseQuery)
        )
      );
    }
    
    return results;
  }, [query, categoryId]);
  
  // Get category name if filtering by category
  const categoryName = categoryId 
    ? categories.find(cat => cat.id === categoryId)?.name 
    : null;
  
  return (
    <div className="search-page">
      <div className="search-header">
        {query ? (
          <h1 className="section-title">Search results for: "{query}"</h1>
        ) : categoryName ? (
          <h1 className="section-title">{categoryName} Recipes</h1>
        ) : (
          <h1 className="section-title">Browse All Recipes</h1>
        )}
        
        {!categoryId && <CategoryList />}
      </div>
      
      <div className="search-results">
        {filteredRecipes.length === 0 ? (
          <div className="empty-state">
            <p>No recipes found. Try a different search term or category.</p>
          </div>
        ) : (
          <div className="recipe-grid">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
