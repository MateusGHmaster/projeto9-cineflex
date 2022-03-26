import { useState } from 'react';
import { useEffect } from 'react';
import './Firstpage.css';
import axios from 'axios';
import IndividualMovie from './IndividualMovie';

export default function Firstpage () {
    
    const [updateMovies, setUpdateMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        console.log(promise);
        promise.then(response => setUpdateMovies(response.data));
    }, []);
    
    let mainPageTitle = 'Selecione o filme';
    
    return (

        <>
            <section className="page-title">
                <p className="middle-page-title">{mainPageTitle}</p>
            </section>
            <section className="movies-section">{
                updateMovies.map(movie => (
                        <IndividualMovie  movie={movie}/>
                ))
            }
            </section>
        </>

    );
}