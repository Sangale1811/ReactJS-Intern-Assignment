// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './search.css';

// // const Search= () => {
// //   const [query, setQuery] = useState('');
// //   const [results, setResults] = useState([]);

// //   const search = async () => {
// //     try {
// //       const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
// //       setResults(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //         <div className="main">
// //       <input
// //       className="form" 
// //         type="text"
// //         value={query}
// //         onChange={(e) => setQuery(e.target.value)}
// //         placeholder="Search Movie"
// //       />
// //       <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
// //       </div >
// //       {results.length > 0 && (
// //         <div className="result">
// //           <h2>Results:</h2>
// //           <ul>
// //             {results.map((result) => (
// //               <li key={result.show.id}>
// //                 <strong>Name: {result.show.name}</strong>
// //                 <br />
// //                 <span>Rating: {result.show.average || 'N/A'}</span>
// //                 <br />
// //              <span>Genres: {result.show.genres}</span>
// //              <br/>
// //              <span>Premiered: {result.show.premiered}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Search;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './search.css';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const search = async () => {
//     try {
//       const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
//       setResults(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className="main">
//         <input
//           className="form"
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search Movie"
//         />
//         <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
//       </div>
//       {results.length > 0 && (
//         <div className="result">
//           <h2>Results:</h2>
//           <ul>
//             {results.map((result) => (
//               <li key={result.show.id}>
//                 <strong>Name: {result.show.name}</strong>
//                 <br />
//                 <span>Rating: {result.show.rating?.average || 'N/A'}</span>
//                 <br />
//                 <span>Genres: {result.show.genres?.join(', ') || 'N/A'}</span>
//                 <br />
//                 <span>Premiered: {result.show.premiered || 'N/A'}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Search() {
//   const [movies, setMovies] = useState([]);
//     const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const fetchMovies = async () => {
//     try {
//       const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
//       setMovies(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//        <input
//           className="form"
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search Movie"
//         />
//       <button onClick={fetchMovies}>Show Movies</button>
//       {movies.map((movie) => (
//         <div key={movie.show.id}>
//           <h2>{movie.show.name}</h2>
//           <p>{movie.show.summary}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Search;

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
