import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Header from './component/Header';
import Banner from './component/Banner';
import Recipes from './component/Recipes/Recipes';
import { useEffect, useState } from 'react';
function App() {
 const [recipes,SetRecipes] = useState([]);
 useEffect(() => {
  fetch('./fakeData.json')
  .then(res => res.json())
  .then(data => SetRecipes(data))
 },[])
 
  return (
    <>
   <Header></Header>
  <Banner></Banner>
  <Recipes recipes={recipes}></Recipes>
    <ToastContainer />
    </>
  )
}

export default App
