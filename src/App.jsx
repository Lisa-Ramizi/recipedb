import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Search from './components/Search';
import Navbar from './components/Navbar';
import heroImage from './assets/hero1.jpg';
import HomeNav from './components/HomeNav';
import LoginForm from './components/LoginForm';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const imageStyle = {
    width: '100%',
    height: '70vh',
    objectFit: 'cover',
  };

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    // Check if the user is already logged in based on local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginClose = () => {
    setShowLoginForm(false);
    setIsLoggedIn(true); // Set the user as logged in
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('username'); // Clear the stored username
    setIsLoggedIn(false); // Set the user as logged out
  };

  return (
    <div className="App">
      <Navbar
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn} 
        onLogoutClick={handleLogoutClick}
      />
      <BrowserRouter>
        <img src={heroImage} alt="Hero" style={imageStyle} />
        <Search />
        <div className="nav-meals-container">
          
        </div>
        <Pages />
        <AddRecipeForm isLoggedIn={isLoggedIn} />
      </BrowserRouter>

      {showLoginForm && (
        <div className="overlay">
          <LoginForm onLogin={handleLoginClose} />
        </div>
      )}
    </div>
  );
}

export default App;
