import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Day from './Day';

export default function Sessions () {
    
    const {movieID} = useParams();
    const [movieSessions, setMovieSessions] = useState(null);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promise.then(response => setMovieSessions(response.data));
      }, [movieID]);
    
    let mainPageTitle = 'Selecione o horário';
    
    if (movieSessions === null) {
        return (<></>);
    } else {
        return (
            <>
                <section className="page-title">
                    <p className="middle-page-title">{mainPageTitle}</p>
                </section>
                <section className='day-sessions'>{
                    movieSessions.days.map(day => (
                        <Day {...day} /> 
                        ))
                    }
                </section>
            </>
        );
    }

}