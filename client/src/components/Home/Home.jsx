import './Home.modules.css'
import React from 'react';
import { displayContinent, displayAllCountries } from '../../redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showCountries, setShowCountries] = useState([]);

    const handleClick = (continent) => {
        navigate('/countries');
        setShowCountries([]);
        dispatch(displayContinent(continent));
    }
    

    const handleClickAll = () => {
        navigate('/countries');
        setShowCountries([]);
        dispatch(displayAllCountries());
    }

    return (
        <div>
            <button onClick={() => handleClick('Americas')}>Americas</button>
            <button onClick={() => handleClick('Asia')}>Asia</button>
            <button onClick={() => handleClick('Africa')}>Africa</button>
            <button onClick={() => handleClick('Europe')}>Europe</button>
            <button onClick={() => handleClick('Oceania')}>Oceania</button>
            <button onClick={() => handleClick('Antarctic')}>Antarctic</button>
            <button onClick={() => handleClickAll()}>Show All</button>
        </div>
    );
}

export default Home;