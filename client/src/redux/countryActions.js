import { DISPLAY_COUNTRY, DISPLAY_ALL_COUNTRIES, DISPLAY_CONTINENT, COUNTRY_DETAILS, REMOVE_COUNTRY } from './action-types'
import axios from 'axios';

const endpoint = 'http://localhost:3001'

export const displayCountry = (name) => {
    return async (dispatch) => {//Función que hace la asincrinía. Por eso el async va en esta
        try {
            const { data } = await axios.get(`${endpoint}/countries/name?name=${name}`);
            
            if(!data) throw Error ('No Country Selected');
            console.log(data);
           
            return dispatch({
                type: DISPLAY_COUNTRY,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        };
    };
};

export const displayAllCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/countries`);
            console.log(data);
            return dispatch({
                type: DISPLAY_ALL_COUNTRIES,
                payload: data,
            });
        } catch (error) {
            
        };
    };
};

export const displayContinent = (continent) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/countries/continent/${continent}`);
            console.log(`Fetched countries for continent ${continent}:`, data);
            return dispatch({
                type: DISPLAY_CONTINENT,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        };
    };
};

export const countryDetails = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/countries/${id}`);
            console.log('Fetched country details:', data);
            return dispatch({
                type: COUNTRY_DETAILS,
                payload: data,
            });        
        } catch (error) {
            console.log(error.message);            
        };
    };
};

export const removeCountry = (id) => ({
    type: REMOVE_COUNTRY,
    payload: id,
});