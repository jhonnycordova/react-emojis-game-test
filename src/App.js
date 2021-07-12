import './App.css';
import Title from './components/Title';
import Emojis from './components/Emojis';
import MovieSearch from './components/MovieSearch';
import { useState } from 'react'


function App() {
  let movies = [
    { name: 'Joker', emojis: '😖🤡🔫' },
    { name: 'Gremlins', emojis: '🐼🍔🕐👹' },
    { name: 'Batman', emojis: '🤵🏾🦇' },
  ];

  let index = 0;
  const [movie, setMovie] = useState(movies[index]);
  const [movieName, setMovieName] = useState('');

  const handleSearch = () => {
    if (movieName.toLowerCase() !== movie.name.toLowerCase()) {
      return;
    }
    setMovieName('');
    setMovie(movies[index + 1]);
  }

  const handleMovieChanged = (movieName) => {
    setMovieName(movieName);
  }

  return (<div className="App">
    <Title text="Guess the movie" />
    <Emojis movieEmoji={movie.emojis}></Emojis>
    <MovieSearch 
      handleSearch={handleSearch} 
      handleMovieChanged={handleMovieChanged} 
      movieName={movieName}>
    </MovieSearch>
  </div>);
}

export default App;
