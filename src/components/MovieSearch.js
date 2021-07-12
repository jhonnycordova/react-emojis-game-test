
const MovieSearch = ({ handleSearch, handleMovieChanged, movieName }) => {

    const handleOnChange = (e) => {
        handleMovieChanged(e.target.value);
    };

    const clickFunction = (e) => {
        handleSearch();
    }

    return (
        <div>
            <input type="text" name="name" id="name" value={movieName} onChange={handleOnChange}/>
            <button type="button" onClick={clickFunction}> Send</button>
        </div>
    );
}

export default MovieSearch;