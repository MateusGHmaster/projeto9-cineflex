import Session from "./Session";

export default function Day ({movieDay}) {
    
    return (

        <section className="day">
            <section className="day-info">
                <p className="session-date-time">{movieDay.weekday} - {movieDay.date}</p>
            </section>
            <section className="session-exact-hour">{
                    movieDay.showtimes.map(moviesSessions => (
                        <Session moviesSessions={moviesSessions}/>
                    ))
                }
            </section>
        </section>

    );
}