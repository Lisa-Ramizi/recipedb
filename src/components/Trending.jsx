import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const check = localStorage.getItem("trending");

    if (check) {
      setTrending(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=6fee339a2090440f8019e9f7334d774f&number=3`
      );
      const data = await api.json();

      localStorage.setItem("trending", JSON.stringify(data.recipes));
      setTrending(data.recipes);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Recipes of the Day</h1>
      <div className="row justify-content-center">
        {trending.map((recipe) => {
          return (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card" style={{ maxWidth: "250px" }}>
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.title}
                  style={{ height: "50%" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "14px" }}>
                    {recipe.title}
                  </h5>
                  <Link to={`/recipe/${recipe.id}`} className="btn btn-warning btn-sm">
                    Check it out!
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
