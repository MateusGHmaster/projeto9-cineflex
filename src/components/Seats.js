import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import { useNavigate } from "react-router-dom"; */

import axios from 'axios';

export default function Seats () {
    
    const {sessionID} = useParams(); 
    const [sessions, setSessions] = useState(null);
    
    useEffect (()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        console.log(promise);
        promise.then(response => setSessions(response.data));
    }, [sessionID])

    let mainPageTitle = 'Selecione o(s) assento(s)';

    return (

        <>
            <section className='seats'>
                <section className='middle-page-title'>{mainPageTitle}</section>
                <section className='all-seats'>{
                        sessions.seats.map(seat => {
                            <Seats {...seat}/>
                        })
                    }
                </section>
            </section>
        </>

    );
}