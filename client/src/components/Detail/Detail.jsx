import './Detail.modules.css'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { countryDetails } from '../../redux/countryActions';
import React from 'react';


function Detail () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countryData = useSelector((state) => state.allCountries.find((country) => country.id === id));
    const { name, flag, continent, capital, subregion, area, population, activities } = countryData;

    useEffect(() => {
        dispatch(countryDetails(id));
    }, [dispatch, id]);

    const handleBack = () => {
        navigate(-1);
    }

        return (
            <div>
                <img className='img-card' src={flag} alt='country-flag' />
                <h2><span style={{ fontWeight: 'bold' }}>Country: </span>{name}</h2>
                <h2><span style={{ fontWeight: 'bold' }}>Country Code: </span>{id}</h2>
                <h2><span style={{ fontWeight: 'bold' }}>Continent: </span>{continent}</h2>
                <h2><span style={{ fontWeight: 'bold' }}>Capital: </span>{capital}</h2>
                <h2><span style={{ fontWeight: 'bold' }}>Subregion: </span>{subregion}</h2>
                <h2><span style={{ fontWeight: 'bold' }}>Area: </span>{area} square kilometers</h2>
                <h2><span style={{ fontWeight: 'bold' }}>Population: </span>{population} Inhabitants</h2>
                <button onClick={handleBack}>Go back</button>
            </div>
        );
}

export default Detail;