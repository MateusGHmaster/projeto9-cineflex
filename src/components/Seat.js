import { useState } from 'react';

export default function Seat ({name, id, handleSeats}) {
    
    const [selectedSeat, setSelectedSeat] = useState(false);

    return (

        <section className={`seat ${selectedSeat ? 'selected-seat' : ''}`} onClick={() => {
                setSelectedSeat(!selectedSeat)
                handleSeats(id);
            }}>
            <section className='single-seat'>
                <div className='seat-number'>{name}</div>
            </section>
        </section>

    );
}