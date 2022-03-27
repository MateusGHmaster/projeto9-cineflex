import { Link } from "react-router-dom";

export default function Session ({id, name}) {
    console.log(name);
    return (

        <Link to={`/seats/${id}`}>
            <section className="single-session">
                <p className="session-time">{name}</p>
            </section>
        </Link>
    );
}