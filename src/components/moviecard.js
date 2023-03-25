import React, { useState, useEffect } from 'react';
import * as config from '../config/config'

const MovieCard = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {

        getMoviesAsync();
    }, [movies])

    const getMoviesAsync = async () => {

        let url = `https://api.themoviedb.org/4/list/1?page=${page}&api_key=9d588f084da0a6ef32713d036b1eda5f`
        let options_get = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            //console.log(data);

            setMovies(data.results);


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ul className='list-group d-block mx-auto mt-5'>
            {
                !!movies && movies.length > 0 && movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <div className="wrapper card mb-3">
                                <div className="row g-0">
                                    <div className="poster-frame col-md-4">
                                        <img src={config.URL_IMG + movie.poster_path} className="poster img-fluid rounded-start" alt="movie poster" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body mt-4 px-4">
                                            <h1 className="card-title title">{movie.original_title.toUpperCase()}</h1>
                                            <p className="card-text description">{movie.overview}</p>
                                            <p className="card-text">Release date: {movie.release_date}</p>
                                            <p className="card-text">Popularity: {movie.popularity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
            <div className='mb-5'>
                <button className="btn btn-change rounded-0 mx-1" onClick={() => {
                    if (page === 1) {
                        console.log(page);
                        return
                    }
                    else {
                        setPage(page - 1);
                        console.log(page);
                        getMoviesAsync();
                    }

                }} >
                    Prev
                </button>

                <button className="btn btn-change rounded-0 mx-1" onClick={() => {

                    if (page === 3) {
                        console.log(page);
                        return;
                    }
                    else {

                        setPage(page + 1);
                        console.log(page);
                        getMoviesAsync();
                    }
                }}>
                    Next
                </button>
            </div>
        </ul>
    )

}

export default MovieCard;



