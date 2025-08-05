import Jumbotron  from "../components/Jumbotron"
import { useState } from "react";




export default function MoviesPage () {
    const MoviesUrl = `http://localhost:3070/movies/`
    [movies, setMovies] = useState([])
    fetch(MoviesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
    
    return (
        <>
        <section>
            <h1>Movies Page</h1>
            <Jumbotron title="Libreria Film" text="Qui trovi tutti i migliori film recentiu e non, per richieste di pellicole da caricare contattaci!" cta="Contattaci!"/>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}