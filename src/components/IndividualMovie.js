import { Link } from "react-router-dom";
import './IndividualMovie.css';

export default function IndividualMovie ({id, posterURL, title}) {

    return (

        <Link to={`/sessions/${id}`}>
            <section className="single-movie">
                <img src={posterURL} alt={title} height={193} width={129}/>
            </section>
        </Link>

    );

}