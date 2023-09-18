import { useEffect, useState } from 'react';

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Recipes</h2>
      <div className="row">
        {recipes.map((recipe, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              {recipe.image && (
                <img
                  src={recipe.image instanceof Blob ? URL.createObjectURL(recipe.image) : recipe.image}
                  className="card-img-top"
                  alt={recipe.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRecipes;
