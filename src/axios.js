import axios from 'axios';

/** URL de base pour faire une demande des donnees de chaques films de TMDB */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

export default instance;
