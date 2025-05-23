import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import NavBar from './components/NavBar';

// Import pages
import Home from './pages/Home';
import Search from './pages/Search';
import RecipeView from './pages/RecipeView';
import MyCollections from './pages/MyCollections';

// PUBLIC_INTERFACE
/**
 * Main Container component for RecipeHub
 * Handles routing and layout structure
 */
function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipe/:id" element={<RecipeView />} />
            <Route path="/collections" element={<MyCollections />} />
            <Route path="*" element={
              <div className="not-found">
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-symbol">🍳</span> RecipeHub
            </div>
            <div className="footer-info">
              <p>&copy; {new Date().getFullYear()} RecipeHub - Find & Share Amazing Recipes</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
