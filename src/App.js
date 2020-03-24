import React, {useState} from 'react';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';

import './App.css';

const apiKey = process.env.REACT_APP_API;

function App() {
  const [movies, setMovies] = useState([])
  const [inputText, setInputText] = useState('')
  
  
  const handleSubmit = e => {
    e.preventDefault();
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputText}`)
      .then(data => data.json())
      .then(data => setMovies( data.results))
}

  const handleChange = e => {
    const inputText = e.target.value;
    setInputText(inputText)
  }

  return (
    <div className="App">
      <Nav />
      <SearchArea handleSubmit={handleSubmit} handleChange={handleChange}/>
      <MovieList movies={movies}/> 
    </div>
  );
}

export default App;
