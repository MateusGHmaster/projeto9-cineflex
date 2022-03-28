import { Link } from "react-router-dom";

export default function Seat ({id}) {
    return (

        <Link to={'/success'}>
            <section className='single-seat'>
                <div className='seat-number'>{id}</div>
            </section>
        </Link>

    );
}