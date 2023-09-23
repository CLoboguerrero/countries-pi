import './Cards.modules.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayContinent, displayAllCountries, removeCountry } from '../../redux/actions';
import React from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

function Cards() {
    const dispatch = useDispatch();
    const filteredCountries = useSelector((state) => state.filteredCountries);
    const [showCountries, setShowCountries] = useState([]);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCountries = showCountries.slice(startIndex, endIndex);


    const getContinent = (continent) => {
        setShowCountries([]);
        dispatch(displayContinent(continent));
    }

    const showAll = () => {
        setShowCountries([]);
        dispatch(displayAllCountries());
    }
    
    const onClose = (id) => {
        setShowCountries((previousCountries) =>
        previousCountries.filter((country) => country.id !== id));
        dispatch(removeCountry(id));
    }

    const clearAll = () => {
        setShowCountries([]);
        showCountries.forEach((country) => {
            dispatch(removeCountry(country.id));
        });
    }

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        // Check if filteredCountries is not empty
        if (filteredCountries.length > 0) {
            // Check for duplicates by comparing country IDs
            const newCountries = filteredCountries.filter((newCountry) => {
                return !showCountries.some(
                    (existingCountry) => existingCountry.id === newCountry.id
                );
            });

            setShowCountries((prevShowCountries) => [
                ...prevShowCountries,
                ...newCountries,
            ]);
        }
    }, [filteredCountries]);

    useEffect(() => {
        return () => {
            setShowCountries([]);
        };
    }, []);

    return (
        <div>
            <h1>COUNTRY FINDER</h1>

            <div className='pagination'>
                <Pagination
                    items={showCountries}
                    itemsPerPage={itemsPerPage}
                    onPageChange={onPageChange} 
                />
            </div>

            <div className='continent-selector'>
                <button onClick={() => getContinent('Americas')}>Americas</button>
                <button onClick={() => getContinent('Asia')}>Asia</button>
                <button onClick={() => getContinent('Africa')}>Africa</button>
                <button onClick={() => getContinent('Europe')}>Europe</button>
                <button onClick={() => getContinent('Oceania')}>Oceania</button>
                <button onClick={() => getContinent('Antarctic')}>Antarctic</button>
                <button onClick={() => showAll()}>Show All</button>
                <button onClick={() => clearAll()}>Clear All</button>
            </div>

            <div className='cards-container'>
                {displayedCountries.map((country) => (
                    <Card
                        key={country.id}
                        id={country.id}
                        flag={country.flag}
                        name={country.name}
                        continent={country.continent}
                        onClose={onClose}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cards;