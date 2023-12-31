import { DISPLAY_COUNTRY, DISPLAY_ALL_COUNTRIES, DISPLAY_CONTINENT, COUNTRY_DETAILS, POST_ACTIVITY } from "./action-types";

const initialState = {
    allCountries: [],
    filteredCountries: [],
    allActivities: [],
    countrySpecs: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case DISPLAY_COUNTRY:
            return {
                ...state,
                allCountries: action.payload,
                filteredCountries: action.payload,
                //filteredCountries: action.payload    
                // allCountries: [...state.allCountries, action.payload],
                // filteredCountries: [...state.filteredCountries, action.payload]
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

        // case REMOVE_COUNTRY:
        //     const updateAllCountries = state.allCountries.filter((country) => country.id !== action.payload);
        //     const updateAllCountriesFilter = state.filteredCountries.filter((country) => country.id !== action.payload);
        //     return {
        //         ...state,
        //         allCountries: updateAllCountries,
        //         filteredCountries: updateAllCountriesFilter
        //     }

        case POST_ACTIVITY:
            return{
                ...state,
                allActivities: action.payload,
            }

        case COUNTRY_DETAILS:
            return{
                ...state,
                countrySpecs: action.payload,
            }

        default:
            return {...state}
    }
}

export default reducer;