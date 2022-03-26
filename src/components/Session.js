import { Link } from "react-router-dom";

export default function Session ({session}) {
    return (

        <Link to={`/sessions/${session.id}`}>
            <section className="single-session">
                <span className="session-time">{session.name}</span>
            </section>
        </Link>
    );
}