import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayAllCountries } from "../../redux/countryActions";

const CountriesList = ({ onChange }) => {
    const dispatch = useDispatch();
    const countriesList = useSelector((state) => state.allCountries);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCountriesList, setSelectedCountriesList] = useState([]);

    useEffect(() => {
        dispatch(displayAllCountries());
    },[dispatch]);

    const getCountryName = (id) => {
        const selectedCountry = countriesList.find((country) => country.id === id);
        return selectedCountry ? selectedCountry.name : '';
    };

    const handleSelectChange = (countryId) => {
        if (!selectedCountriesList.includes(countryId)) {
            setSelectedCountriesList([...selectedCountriesList, countryId]);
            onChange({ target: { name: 'country', value: [...selectedCountriesList, countryId] } })
        }
    }

    const handleDelete = (country) => {
        const updatedList = selectedCountriesList.filter((countryId) => countryId !== country);
        setSelectedCountriesList(updatedList);
        onChange({ target: { name: 'country', value: updatedList } });
    }
    
    const sortedCountries = countriesList.slice().sort((a,b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return (
        <div className="list-container">
            <h2>Select one or more Countries:</h2>
            <select name="country" value={selectedCountry} onChange={(event) => handleSelectChange(event.target.value)}>
                    <option value="">Select one o more Countries:</option>
                    {sortedCountries.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
            </select>

            <ul>
                {selectedCountriesList.map((countryName) => (
                    <li key={countryName}>
                        {getCountryName(countryName)}
                        <button onClick={() => handleDelete(countryName)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CountriesList;