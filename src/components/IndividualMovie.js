import { Link } from "react-router-dom";

export default function IndividualMovie ({movie}) {

    return (

        <Link to={`/sessions/${movie.id}`}>
            <section className="single-movie">
                <img src={movie.posterURL} alt={movie.title}/>
            </section>
        </Link>

    );

}