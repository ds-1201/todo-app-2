import axios from "axios";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
export const getTodos = () => axios.get(ENDPOINT);
