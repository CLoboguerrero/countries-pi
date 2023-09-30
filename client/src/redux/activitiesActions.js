import { POST_ACTIVITY } from "./action-types";
import axios from "axios";

const endpoint  = 'http://localhost:3001'

export const postActivity = (formData) => {
    return async (dispacth) => {

        try {
            const { data } = await axios.post(`${endpoint}/activities`, formData)
    
        } catch (error) {
            console.log(error.message);
        };
    };
};

export const getActivity = () => {
    return async (dispacth) => {

        try {
            const { data } = await axios.get(`${endpoint}/activities`, formData)
    
            return dispacth({
                type: POST_ACTIVITY,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        };
    };
};