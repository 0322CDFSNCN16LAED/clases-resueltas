import React from "react";
import BigCard from "../BigCard";
import Genre from "./Genre";

let genres = [
    { genre: "Acción" },
    { genre: "Animación" },
    { genre: "Aventura" },
    { genre: "Ciencia Ficción" },
    { genre: "Comedia" },
    { genre: "Documental" },
    { genre: "Drama" },
    { genre: "Fantasia" },
    { genre: "Infantiles" },
    { genre: "Musical" },
];

function GenresInDb() {
    return (
        <BigCard title="Genres in Database">
            <div className="row">
                {genres.map((genre, index) => {
                    return <Genre {...genre} key={index} />;
                })}
            </div>
        </BigCard>
    );
}
export default GenresInDb;
