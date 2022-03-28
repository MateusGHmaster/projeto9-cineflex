import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Seats.css';
import Seat from './Seat';

import axios from 'axios';

export default function Seats () {
    
    const {sessionID} = useParams(); 
    const [sessions, setSessions] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');

    useEffect (()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promise.then(response => setSessions(response.data));
    }, [sessionID])

    let mainPageTitle = 'Selecione o(s) assento(s)';
    let navigate = useNavigate();

    function goToSuccessPage () {
        navigate('/success');
    }

    function handleFormSubmit () {
        if ((cpf !== '') && (name !== '')) {
            const dataPost = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {ids: selectedSeats, name: name, cpf: cpf});
            dataPost.then = goToSuccessPage();
        }
        
        console.log(
            {
            ids: selectedSeats,
            name: name,
            cpf: cpf
            }
        );
    }

    function handleSeats (id) {
        if (selectedSeats.includes(id)) {
            let newSelectedSeat = selectedSeats.filter(seat => seat !== id);
            setSelectedSeats([...newSelectedSeat]);
        } else { 
            setSelectedSeats([...selectedSeats, id]);
        }
    }

    if (sessions === null) { 
        
        return (<></>);

    } else {
        return (

            <>
                <section className='seats'>
                    <section className="page-title-3">
                        <p className="middle-page-title">{mainPageTitle}</p>
                    </section>
                    <section className='all-seats'>{
                            sessions.seats.map(seat => (
                                <Seat {...seat} handleSeats={handleSeats} handleFormSubmit={handleFormSubmit}/>
                            ))
                        }
                    </section>
                </section>
                <section className='colored-examples'>
                    <div className='selected-example'></div>
                    <div className='available-example'></div>
                    <div className='unavailable-example'></div>
                </section>
                <section className='seat-info'>
                    <div className='seat-example'>Selecionado</div>
                    <div className='seat-example'>Disponível</div>
                    <div className='seat-example'>Indisponível</div>
                </section>
                <section className='customer-data'>
                    <div className='customer-name'>
                        <p>Nome do comprador:</p>
			            <input className='customer-input' value={name} onChange={input => (setName(input.target.value))} placeholder="Digite seu nome..." />
                    </div>
                    <div className='customer-cpf'>
                        <p>CPF:</p>
			            <input className='customer-input' value={cpf} onChange={input => (setCPF(input.target.value))} placeholder="Digite seu CPF..." />
                    </div>
                    <section className='finish'>
                        <button type='button' className='finish-seat' onClick={handleFormSubmit}>Reservar assento(s)</button>
                    </section>
                </section>
            </>

        ); 
    }
}