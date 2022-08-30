import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import MensajeSecreto from "../MensajeSecreto";
import Movie from "./Movie";

const EXPRESS_HOST = "http://localhost:3001";

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/api/movies`);
        const moviesResult = await result.json();
        const newMovies = moviesResult.data;
        this.setState({
            movies: newMovies,
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    All the movies in the Database
                </h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Genero</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Genero</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {this.state.movies.map((movie) => {
                                        return (
                                            <Movie {...movie} key={movie.id} />
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Route path="/movies/gatitos" component={MensajeSecreto} />
            </React.Fragment>
        );
    }
}
