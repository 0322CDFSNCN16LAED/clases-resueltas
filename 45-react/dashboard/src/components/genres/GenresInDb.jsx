import React, { Component } from "react";
import BigCard from "../BigCard";
import Genre from "./Genre";

const EXPRESS_HOST = "http://localhost:3001";

export default class GenresInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/api/genres`);
        const genresResult = await result.json();
        const newGenres = genresResult.data;
        this.setState({
            genres: newGenres,
        });
    }

    render() {
        return (
            <BigCard title="Genres in Database">
                <div className="row">
                    {this.state.genres.map((genre) => {
                        return <Genre {...genre} key={genre.id} />;
                    })}
                </div>
            </BigCard>
        );
    }
}
