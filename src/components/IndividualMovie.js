import { Link } from "react-router-dom";

export default function IndividualMovie ({id, posterURL, title}) {

    return (

        <Link to={`/sessions/${id}`}>
            <section className="single-movie">
                <img src={posterURL} alt={title}/>
            </section>
        </Link>

    );

}