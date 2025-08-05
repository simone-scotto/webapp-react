import Jumbotron from "../components/Jumbotron"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";



export default function SingleMoviePage() {

    const { id } = useParams()
    console.log(id);
    const [movie, setMovie] = useState({})
    const singleMovieUrl = `http://localhost:3070/api/movies/${id}`
    console.log(singleMovieUrl);

    useEffect(() => {
        fetch(singleMovieUrl)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setMovie(data)

            })
    }, [])

    return (
        <>
            <h1>Single Movie Page</h1>
            <section>
                <div className="container d-flex justify-content-evenly">
                    <div>
                        <h1 className="text-center">{movie.title}</h1>
                        <p className="text-center">{movie.release_year}</p>
                        <p>Directed by: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Plot: {movie.abstract}</p>
                        <p>{"media voto delle recensioni?"}</p>
                    </div>

                    <img className="h-100" src={movie.image} alt={movie.title} />

                </div>
            </section>
        </>
    )
}