import Session from "./Session";

export default function Day ({weekday, date, showtimes}) {
    
    return (

        <section className="day">
            <section className="day-info">
                <p className="session-date-time">{weekday} - {date}</p>
            </section>
            <section className="session-exact-hour">{
                    showtimes.map(showtime => (
                        <Session showtime={showtime}/>
                    ))
                }
            </section>
        </section>

    );
}