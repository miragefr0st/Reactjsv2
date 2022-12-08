import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="app">
			{/*Nav = logo netflix et logo bonhome la barre noire*/}
			<Nav />
			
			{/*Banner = film choisi aleatoirement dans l'API que l'on affiche en grand*/}
			<Banner />

			{/*Row = le slide de film dans chaques categories*/}
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="En Tendances" fetchUrl={requests.fetchTrending} />
			<Row title="Masterclass" fetchUrl={requests.fetchTopRated} />
			<Row title="Actions" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horreurs" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romances" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
