
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Searched() {

    const[searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=6fee339a2090440f8019e9f7334d774f&query=${name}`
        )
        const recipes = await data.json()
        setSearchedRecipes(recipes.results);
    }

    useEffect(() => {
        getSearched(params.search);
    },[params.search])

  return (
    <Wrapper>
      {searchedRecipes.map((item) => {
        return(
            <Card key = {item.id}>
                <CardImage src={item.image} />
                <CardContent>
                <Title>{item.title}</Title>
                <Link to={'/recipe/' + item.id}>
              <Button>Check it out</Button>
              </Link>
                </CardContent>
            </Card>
        )
      })}

    </Wrapper>
  )
}

const Button = styled.button`
  background-color: #393939;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  margin: 4rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: calc(20% - 1rem); /* Adjust the width and margin as needed */
  border: 1px solid #ccc;
  background-color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  margin-top: 0;
  margin-bottom: 0.5rem; /* Adjust the margin between title and button */
  max-height: 3rem; /* Increase max height for the title */
  overflow: hidden;
`;




export default Searched