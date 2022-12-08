import axios from 'axios';

/** URL de base pour faire une demande des films de TMDB */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

export default instance;
