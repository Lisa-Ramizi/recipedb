import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav !== params.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(params.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=6fee339a2090440f8019e9f7334d774f`
    );

    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(params.id));
  }, [params.id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={details.image} alt={details.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <h2 className="mr-3">{details.title}</h2>
            <button className="btn btn-outline-danger btn-sm ms-4" onClick={toggleFavorite}>
              {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
