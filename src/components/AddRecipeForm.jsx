import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRecipeForm({ isLoggedIn }) {
  const [recipeData, setRecipeData] = useState({
    title: '',
    description: '',
    image: null,
  });

  const [isFormVisible, setFormVisible] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);

      reader.onload = () => {
        setRecipeData({
          ...recipeData,
          image: reader.result,
        });
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      alert('Please log in to add a new recipe.');
      return;
    }

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipeData);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    setRecipeData({
      title: '',
      description: '',
      image: null,
    });

    alert('Recipe added successfully!');
  };

  const showForm = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="container">
      {!isFormVisible ? (
        <div>
          <button type="button" className="btn btn-secondary mb-4" onClick={showForm}>
            Add your favorite recipe!
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ float: 'right' }}
            onClick={closeForm}
          >
            X
          </button>
          <h2 className="mt-4">Create a New Recipe</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={recipeData.title}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={recipeData.description}
              onChange={handleInputChange}
              className="form-control"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <button type="submit" className="btn btn-primary">
              Create Recipe
            </button>
            {isLoggedIn ? (
              <Link to="/my-recipes" className="btn btn-secondary" style={{ marginLeft: '5px' }}>
                My Recipes
              </Link>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => alert('Please log in to view your recipes.')}
                style={{ marginLeft: '5px' }}
              >
                My Recipes
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default AddRecipeForm;
