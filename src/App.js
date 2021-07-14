import "./App.css";
import Title from "./components/Title";
import Emojis from "./components/Emojis";
import MovieSearch from "./components/MovieSearch";
import { useState } from "react";

const movies = [
  { name: "Joker", emojis: "😖🤡🔫" },
  { name: "Gremlins", emojis: "🐼🍔🕐👹" },
  { name: "Batman", emojis: "🤵🏾🦇" },
  { name: "Beauty and the Beast", emojis: "👸🥀👹" },
];

function App() {
  const [round, setRound] = useState(0);
  const [currentMovie, setCurrentMovie] = useState(movies[round]);
  const [userGuess, setUserGuess] = useState("");

  const handleSearch = () => {
    if (userGuess.toLowerCase() !== currentMovie?.name.toLowerCase()) {
      return;
    }
    setUserGuess("");
    setRound((currentRound) => ++currentRound);
    setCurrentMovie(movies[round]);
  };

  const handleUserGuessChanged = (userGuess) => {
    setUserGuess(userGuess);
  };

  return (
    <div className="App">
      <Title text="Guess the movie" />
      <Emojis movieEmoji={currentMovie?.emojis}></Emojis>
      <MovieSearch
        handleSearch={handleSearch}
        handleUserGuessChanged={handleUserGuessChanged}
        userGuess={userGuess}
      ></MovieSearch>
    </div>
  );
}

export default App;
