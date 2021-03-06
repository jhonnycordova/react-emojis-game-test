const MovieSearch = ({ handleSearch, handleUserGuessChanged, userGuess }) => {
  const handleOnChange = (e) => {
    handleUserGuessChanged(e.target.value);
  };

  const clickFunction = (e) => {
    handleSearch();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        value={userGuess}
        onChange={handleOnChange}
      />
      <button type="button" onClick={clickFunction}>
        {" "}
        Send
      </button>
    </div>
  );
};

export default MovieSearch;
