import './SearchBar.modules.css'
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { displayCountry } from '../../redux/countryActions';

function SearchBar ({ currentPage, setCurrentPage }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSearch = () => {
        if (name.trim() === ''){
            alert('Please enter a country name before searching.');
        } else {
            if (location.pathname !== '/countries') {//pathname, es una propiedad del hook useLocation de react-router-dom
                navigate('/countries');
            }
            setCurrentPage(1)
            dispatch(displayCountry(name));
            setName('')
        }
    }


    return (
        <div className='nav-elements'>
            <input
                className='input-field' 
                type='search'
                placeholder='Search By Name'
                onChange={handleChange}
                value={name}
            />
            <h3 className='search-buttons' onClick={handleSearch}>Search</h3>
        </div>
    );
}

export default SearchBar;