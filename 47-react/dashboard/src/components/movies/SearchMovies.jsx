import React from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
    const movies = [
        {
            Id: 55,
            Title: "Parchís",
            Year: "1983",
            Poster: "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg",
        },
        {
            Id: 9583,
            Title: "Brigada en acción",
            Year: "1977",
            Poster: "N/A",
        },
    ];

    const keyword = "PELÍCULA DEMO";

    return (
        <div className="container-fluid">
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    {/* Buscador */}
                    <form method="GET">
                        <div className="form-group">
                            <label htmlFor="">Buscar por título:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button className="btn btn-info">Search</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Películas para la palabra: {keyword}</h2>
                </div>
                {movies.map((movie, i) => {
                    return <MovieCard movie={movie} key={movie.Id} />;
                })}
            </div>
            {movies.length === 0 && (
                <div className="alert alert-warning text-center">
                    No se encontraron películas
                </div>
            )}
        </div>
    );
}

export default SearchMovies;
