import React from 'react';
import './Main.css';

export default function Main () {
    
    let mainPageTitle = 'Selecione o filme';
    
    return (

        <>
            <main>
                <section className="page-title">
                    <p className="middle-page-title">{mainPageTitle}</p>
                </section>
                <section className="movies-page">

                </section>
            </main>
        </>

    );
}