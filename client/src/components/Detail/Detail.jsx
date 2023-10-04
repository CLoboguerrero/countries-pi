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
    const countryData = useSelector((state) => state.countrySpecs);
    const { name, flag, continent, capital, subregion, area, population, Activities } = countryData;

    useEffect(() => {
        console.log(countryData);
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

                <h2><span style={{ fontWeight: 'bold' }}>Activities:</span></h2>
            <ul>
                {Activities && Activities.length > 0 ? (
                    Activities.map((activity, index) => (
                        <li key={index}>
                            Activity: {activity.activityName} - Difficulty: {activity.difficulty} - Duration: {activity.duration} - Season: {activity.season}
                        </li>
                    ))
                ) : (
                    <li>No activities available</li>
                )}
            </ul>
            
            <button onClick={handleBack}>Go back</button>
        </div>
    );
}

export default Detail;