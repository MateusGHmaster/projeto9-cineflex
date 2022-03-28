import { useNavigate } from 'react-router-dom';
import './Success.css';

export default function Success ({title, date, name}) {

    let navigate = useNavigate();
    
    function returnHome () {
        navigate('/');
    }

    return (

        <>
            <section className='success-page-title'>
                <p className='order-success'>Pedido feito com sucesso!</p>
            </section>
            <section className='info-block'>
                <span className='success-class'>Filme e sessão</span>
                <p className='movie-ordered-name'>{title}</p>
                <p className='session-ordered-data'>{date} {name}</p>
            </section>
            <section className='info-block'>
                <span className='success-class'>Ingressos</span>
                <p className='ordered-seat-number'>Assento(s) {}</p>
            </section>
            <section className='info-block'>
                <span className='success-class'>Comprador</span>
                <p className='buyer-name'>Nome: {}</p>
                <p className='buyer-cpf'>CPF: {}</p>
            </section>
            <section className='final-button'>
                <button type='button' className='home-button' onClick={returnHome}>Voltar para Home</button>
            </section>
        </>

    );
}