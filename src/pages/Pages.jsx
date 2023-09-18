import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import Meals from './Meals'
import Searched from './Searched'
import Recipe from './Recipe'
import MyRecipes from './MyRecipes'

function pages() {
  return (
    
      <Routes>
        <Route path = "/" element={<Home /> } />
        <Route path = "/meals/:type" element={<Meals /> } />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path ="/recipe/:id" element ={<Recipe />} />
        <Route path="/my-recipes" element = {<MyRecipes />} />
      </Routes>
    
  )
}

export default pages