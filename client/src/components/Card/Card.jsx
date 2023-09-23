import './Card.modules.css';

function Card ({ id, name, flag, continent, onClose }) {

    return(
        <div className='card'>
            <button id='close' onClick={() => onClose(id)}>X</button>
            <img className='img-card' src={flag} alt='country-flag' />
            <h2 className='country-name'>{name}</h2>
            <h2 className='country-continent'><span style={{ fontWeight: 'bold' }}>Continent:</span>{continent}</h2>
        </div>
    );
}

export default Card;