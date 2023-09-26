import { DISPLAY_COUNTRY, DISPLAY_ALL_COUNTRIES, DISPLAY_CONTINENT, REMOVE_COUNTRY, COUNTRY_DETAILS, POST_ACTIVITY } from "./action-types";

const initialState = {
    allCountries: [],
    selectedContinent: [],
    filteredCountries: [],
    allActivities: [],
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


        // case COUNTRY_DETAILS:
        //     // Check if the country details already exist in the state
        //     const existingCountry = state.allCountries.find((country) => country.id === action.payload.id);
            
        //     if (existingCountry) {
        //         // If the country details already exist, update the existing details
        //         const updatedAllCountries = state.allCountries.map((country) =>
        //             country.id === action.payload.id ? action.payload : country
        //         );
                
        //         return {
        //             ...state,
        //             allCountries: updatedAllCountries,
        //             filteredCountries: updatedAllCountries, // You can update filteredCountries here if needed
        //         };
        //     } else {
        //         // If the country details don't exist, add them
        //         return {
        //             ...state,
        //             allCountries: [...state.allCountries, action.payload],
        //             filteredCountries: [...state.allCountries, action.payload], // You can update filteredCountries here if needed
        //         };
        //     }
        
        case REMOVE_COUNTRY:
            const updateAllCountries = state.allCountries.filter((country) => country.id !== action.payload);
            const updateAllCountriesFilter = state.filteredCountries.filter((country) => country.id !== action.payload);
            return {
                ...state,
                allCountries: updateAllCountries,
                filteredCountries: updateAllCountriesFilter
            }

        case POST_ACTIVITY:
            return{
                allActivities: action.payload,
            }

        default:
            return {...state}
    }
}

export default reducer;