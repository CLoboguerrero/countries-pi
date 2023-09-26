import './Card.modules.css';
import { Link } from 'react-router-dom';

function Card ({ id, name, flag, continent, onClose }) {

    return(
        <div className='card'>
            <img className='img-card' src={flag} alt='country-flag' />
            <h2 className='country-name'>{name}</h2>
            <h2 className='country-continent'><span style={{ fontWeight: 'bold' }}>Continent:</span>{continent}</h2>
            <div className='bottom-buttons'>
            <Link to={`/detail/${id}`} >
               <h3 className="card-details">Detailed Specs</h3>
            </Link>
         </div>
        </div>
    );
}

export default Card;