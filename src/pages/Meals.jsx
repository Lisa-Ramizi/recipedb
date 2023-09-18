import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Meals() {
  const [meals, setMeals] = useState([]);
  let params = useParams();

  const getMeals = async (name) => {
    try {
      // Convert the name to lowercase
      const lowercaseName = name.toLowerCase();

      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=6fee339a2090440f8019e9f7334d774f&type=${lowercaseName}&number=4`;
      console.log("API URL:", apiUrl);

      const data = await fetch(apiUrl);

      if (!data.ok) {
        // Handle non-successful response (e.g., status 402)
        throw new Error(`Request failed with status ${data.status}`);
      }

      const recipes = await data.json();
      setMeals(recipes.results);
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    }
  };

  useEffect(() => {
    if (params.type) {
      getMeals(params.type);
      console.log(params.type);
    }
  }, [params.type]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {meals.length > 0 && (
            <div className="card mb-4" style={{ height: "81.5vh" }}>
              <img
                src={meals[0].image}
                className="card-img-top"
                alt={meals[0].title}
              />
              <div className="card-body">
                <h5 className="card-title">{meals[0].title}</h5>
                <p className="card-text">{meals[0].summary}</p> {/* Display item summary */}
                <Link to={"/recipe/" + meals[0].id}>
                    <button className="btn btn-warning rounded mt-4">Read More!</button>
                    </Link>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-8">
          {meals.slice(1, 4).map((item, index) => (
            <div
              key={item.id}
              className="card mb-4"
              style={{ height: "25.2vh" }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="card-img"
                    alt={item.title}
                    style={{ height: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.id.summary}</p> {/* Display item summary */}
                    <Link to={"/recipe/" + item.id}>
                    <button className="btn btn-warning rounded mt-4">Read More!</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meals;
