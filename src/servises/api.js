import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c01f14dcdb58e9cec669b1017a4d540c';

axios.defaults.baseURL = URL;

export const getMovies = (page) =>
    axios.get(`/trending/movie/week?api_key=${API_KEY}&page=${page}`);

export const getSearch = (search, page) =>
    axios.get(`/search/movie?api_key=${API_KEY}&page=${page}&query=${search}`)

export const getOneMovie = (movieID) =>
    axios.get(`/movie/${movieID}?api_key=${API_KEY}`);

export const getCast = (movieID) =>
    axios.get(`/movie/${movieID}/credits?api_key=${API_KEY}`);

export const getReview = (movieID, page) =>
    axios.get(`/movie/${movieID}/reviews?api_key=${API_KEY}&page=${page}`);
