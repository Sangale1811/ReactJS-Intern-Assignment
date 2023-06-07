import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

function Search() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  return (
    <div className="main">
      <form onSubmit={handleSearchSubmit}>
        <input className="search-bar" type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search for a movie" />
        <button className="show" type="submit">Search</button>
      </form>
      <div className="container">
     
      {movies.map((movie) => (
        <div key={movie.show.id} >
          <h2 className='result'>{movie.show.name}</h2>
          {/* <p>{movie.show.summary}</p> */}
          <span>Rating: {movie.show.average || 'N/A'}</span>
                 <br />
              <span>Genres: {movie.show.genres?.join(', ') || 'N/A'}</span>
              <br/>
              <span>Premiered: {movie.show.premiered}</span>
         <hr/>
          </div>
      ))}
    </div>
    </div>
  );
}
export default Search;
