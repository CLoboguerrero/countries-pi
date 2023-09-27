import './Cards.modules.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayContinent, displayAllCountries } from '../../redux/countryActions';
import React from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

function Cards({ currentPage, setCurrentPage }) {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCountries = allCountries.slice(startIndex, endIndex);

    const handleContinent = (continent) => {
        setCurrentPage(1);
        dispatch(displayContinent(continent));
    }

    const handleAll = () => {
        setCurrentPage(1)
        dispatch(displayAllCountries());
    }

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    }
    
    return (
        <div>
            <br />
            <br />
            <h1>COUNTRIES</h1>

            <div className='pagination'>
                <Pagination
                    key={allCountries.length}
                    items={allCountries}
                    itemsPerPage={itemsPerPage}
                    onPageChange={onPageChange}
                />
            </div>

            <div className='continent-buttons'>
                <button onClick={() => handleAll()}>Show All</button>
                <button onClick={() => handleContinent('Americas')}>Americas</button>
                <button onClick={() => handleContinent('Asia')}>Asia</button>
                <button onClick={() => handleContinent('Africa')}>Africa</button>
                <button onClick={() => handleContinent('Europe')}>Europe</button>
                <button onClick={() => handleContinent('Oceania')}>Oceania</button>
                <button onClick={() => handleContinent('Antarctic')}>Antarctic</button>
            </div>

            <div className='cards-container'>
                {Array.isArray(displayedCountries) 
                ? (displayedCountries.map((country) => (
                    <Card
                        key={country.id}
                        id={country.id}
                        flag={country.flag}
                        name={country.name}
                        continent={country.continent}
                    />
                    ))
                ) 
                : (<p>Loading or no data available</p>)}
            </div>
        </div>
    );
}

export default Cards;