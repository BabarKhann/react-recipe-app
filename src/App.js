import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "f135d347";
  const APP_KEY = "278c6635f2609a823be0e5b8e87594e7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
  }

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="container">
      <form onSubmit={getSearch}>
        <input className="form-control"
          type="text"
          value={search}
          onChange={searchHandler}
          placeholder="Search Recipe"
        />
        <button type="submit" className="btn btn-primary rounded">
          Search
        </button>
      </form>
      <hr />
      {
        recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
        ))
      }
    </div>
  );
}

export default App;
