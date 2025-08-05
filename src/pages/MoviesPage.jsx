import Jumbotron from "../components/Jumbotron"
import { useState } from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function MoviesPage() {
    const moviesUrl = `http://localhost:3070/api/movies`
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(moviesUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data)

            })
    }, [])
    return (
        <>
            <section>
                <h1>Movies Page</h1>
                <Jumbotron title="Libreria Film" text="Qui trovi tutti i migliori film recentiu e non, per richieste di pellicole da caricare contattaci!" cta="Contattaci!" />
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {movies.map((movie) => {
                            return (
                                <div className="col" key={movie.id}>
                                    <div className="card h-100 w-75">
                                        <Link to={`/movies/${movie.id}`}>
                                            <img src={movie.image} alt="image" className="card-img-top" />
                                        </Link>

                                        <div className="card-body">
                                            <h5 className="card-title d-inline">{movie.title}</h5>
                                            <span className="ps-3">({movie.release_year})</span>
                                            <p className="card-text">Directed by: {movie.director}</p>
                                        </div>


                                    </div>
                                </div>


                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}