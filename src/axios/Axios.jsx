import axios from "axios";

const token= import.meta.env.VITE_TDMB_ACCESS_TOKEN;

export const Axios=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Authorization:`Bearer ${token}`,
        Accept :'application/json'
    }
})