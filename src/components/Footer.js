import './Footer.css'

export default function Footer ({posterURL, title}) {
    
    return (

        <section className='footer'>
            <section className='footer-thumbnail'>
                <img className='thumbnail' src={posterURL} alt={title} width={48} height={72}/>
            </section>
        </section>

    );
}