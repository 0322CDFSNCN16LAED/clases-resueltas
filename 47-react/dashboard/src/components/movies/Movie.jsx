export default function Movie({ title, genre, id, rating, awards, length }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{genre ? genre.name : "No definido"}</td>
            <td>{rating}</td>
            <td>{awards}</td>
            <td>{length || "No definido"}</td>
        </tr>
    );
}
