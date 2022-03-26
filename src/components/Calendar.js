import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Day from './Day';
import Session from './Session';
import axios from 'axios';

export default function Session () {
   
    const { movieID } = useParams();
    const [sessionTime, setSessionTime] = useState('');

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promise.then(response => setSessionTime(response.data));
    }, []);

    let mainPageTitle = 'Selecione o filme';
    
    return '' ? (

            <>
            </>

        ) : (

            <>
                <section className="page-title">
                    <p className="middle-page-title">{mainPageTitle}</p>
                </section>
                <section className="movie-sessions">{
                    sessionTime.days.map(movieDay => (
                        <Day movieDay={movieDay}/>
                    ))
                }
                </section>
            </>

    );
}