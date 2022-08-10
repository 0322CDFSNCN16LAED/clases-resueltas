window.onload = async () => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");

    const createBtn = document.querySelector(".botonAgregar");
    const editBtn = document.querySelector(".botonModificar");
    const deleteBtn = document.querySelector(".botonBorrar");

    if (!id) {
        editBtn.style.disabled = true;
        deleteBtn.style.disabled = true;
        return;
    }

    createBtn.style.disabled = true;

    const endpoint = `http://localhost:3031/api/movies/${id}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    const movie = result.data;

    const titleInput = document.querySelector("#title");
    const ratingInput = document.querySelector("#rating");
    const awardsInput = document.querySelector("#awards");
    const release_dateInput = document.querySelector("#release_date");
    const lengthInput = document.querySelector("#length");

    titleInput.value = movie.title;
    ratingInput.value = movie.rating;
    awardsInput.value = movie.awards;
    release_dateInput.value = dayjs(movie.release_date).format("YYYY-MM-DD");
    lengthInput.value = movie.length;

    editBtn.addEventListener("click", async () => {
        await fetch(endpoint, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleInput.value,
                rating: ratingInput.value,
                awards: awardsInput.value,
                release_date: release_dateInput.value,
                length: lengthInput.value,
            }),
        });
        // window.location.assign("home.html");
    });
};
