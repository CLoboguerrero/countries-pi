import { POST_ACTIVITY } from "./action-types";
import axios from "axios";

const endpoint  = 'http://localhost:3001'

export const postActivity = () => {
    return async (dispacth) => {

        try {
            const { data } = await axios.post(`${endpoint}/activities`)
    
            return dispacth({
                type: POST_ACTIVITY,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        };
    };
};