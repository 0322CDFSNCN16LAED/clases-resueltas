window.onload = async () => {
    const container = document.querySelector(".container");

    function createMovieCard(movie) {
        const card = document.createElement("div");
        card.classList.add("card");

        const h2 = document.createElement("h2");
        h2.textContent = movie.title;
        card.appendChild(h2);

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${movie.rating}`;
        card.appendChild(rating);

        const duration = document.createElement("p");
        duration.textContent = `Duración: ${movie.length}`;
        card.appendChild(duration);

        const genero = document.createElement("p");
        genero.textContent = `Genero: ${
            movie.genre ? movie.genre.name : "Sin género"
        }`;
        card.appendChild(genero);

        container.appendChild(card);
    }

    const endpoint = "http://localhost:3031/api/movies";

    // Aquí debemos agregar nuestro fetch
    const response = await fetch(endpoint);
    const result = await response.json();

    const movies = result.data;

    // Código que debemos usar para mostrar los datos en el frontend
    movies.forEach((movie) => {
        createMovieCard(movie);
    });
};
