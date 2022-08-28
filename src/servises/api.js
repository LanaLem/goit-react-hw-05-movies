import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c01f14dcdb58e9cec669b1017a4d540c';

axios.defaults.baseURL = URL;

export const getMovies = (page) =>
    axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${page}`);

