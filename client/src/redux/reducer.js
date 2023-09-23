import { DISPLAY_COUNTRY, DISPLAY_ALL_COUNTRIES, DISPLAY_CONTINENT, REMOVE_COUNTRY, COUNTRY_DETAILS } from "./action-types";

const initialState = {
    allCountries: [],
    filteredCountries: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case DISPLAY_COUNTRY:
            return {
                ...state,
                allCountries: action.payload,
                filteredCountries : action.payload,
            }

        case DISPLAY_CONTINENT:
            return {
                ...state,
                allCountries: action.payload,
                filteredCountries: action.payload
            }

        case DISPLAY_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                filteredCountries: action.payload
            }

        case COUNTRY_DETAILS:
            return {
                ...state,
                allCountries: action.payload,
            }
        
        case REMOVE_COUNTRY:
            const updateAllCountries = state.allCountries.filter((country) => country.id !== action.payload);
            const updateAllCountriesFilter = state.filteredCountries.filter((country) => country.id !== action.payload);
            return {
                ...state,
                allCountries: updateAllCountries,
                filteredCountries: updateAllCountriesFilter
            }
        default:
            return {...state}
    }
}

export default reducer;