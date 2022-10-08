import React, { useState, useEffect } from 'react';
import * as config from '../config/config'

const MovieCard2 = () => {

    const [movies, setMovies] = useState([]);
    let BlockBuster = []

    useEffect(() => {

        getMoviesAsync();
    }, [])

    const getMoviesAsync = async () => {

        let url = 'https://api.themoviedb.org/4/list/1?page=2&api_key=9d588f084da0a6ef32713d036b1eda5f'
        let options_get = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            console.log(data);

            setMovies(data.results);


        } catch (error) {
            console.log(error);
        }
    }

   // console.log(movies.results)


    return (
        <ul className='list-group d-block mx-auto mt-5'>
            {
                !!movies && movies.length > 0 && movies.map((movie) => {
                    //console.log(movie)
                    return (
                        <li key={movie.id}>
                            <div className="wrapper card mb-3">
                                <div className="row g-0">
                                    <div className="poster-frame col-md-4">
                                        <img src={config.URL_IMG + movie.poster_path} className="poster img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h1 className="card-title">{movie.original_title}</h1>
                                            <p className="card-text">{movie.overview}</p>
                                            <p className="card-text">Release date: {movie.release_date}</p>
                                            <p className="card-text">Popularity: {movie.popularity}</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    )
                })
            }
        </ul>
    )

}

export default MovieCard2;

