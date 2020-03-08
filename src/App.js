import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "f135d347";
  const APP_KEY = "278c6635f2609a823be0e5b8e87594e7";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      {
        recipes.map(recipe => <Recipe key={recipe.label} recipe={recipe} />)
      }
    </div>
  );
}

export default App;
