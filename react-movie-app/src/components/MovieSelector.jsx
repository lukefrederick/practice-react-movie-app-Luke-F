const movieDatabase = [
    { genre: 'Action', movies: ["Mad Max: Fury Road", "Die Hard", "John Wick"] },
    { genre: 'Comedy', movies: ["Superbad", "Step Brothers", "The Hangover"] },
    { genre: 'Drama', movies: ["The Shawshank Redemption", "Forrest Gump", "TheGodfather"] }
];


let selectedGenre = '';
let isLoading = false;
let error = '';
let movies = 

function displayGenre() {
    if(genre === 'Action') {
        return movieDatabase[0].movies;
    }
    else if(genre === 'Comedy') {
        return movieDatabase[1].movies;
    }
    else return movieDatabase[2].movies;
}

function MovieSelector() {

    // console.log("Test" + movieDatabase[0].genre)

    return (
        <>
            <select id="movieGenres" name="movieGenres" required>
                <option value={movieDatabase[0].genre}>{movieDatabase[0].genre}</option>
                <option value={movieDatabase[1].genre}>{movieDatabase[1].genre}</option>
                <option value={movieDatabase[2].genre}>{movieDatabase[2].genre}</option>
            </select>
            <div>
                <button type="button" id="movieGenres" onClick={() => {}}>
                    Select Genre</button>
            </div>
        </>

    )

}

export default MovieSelector;