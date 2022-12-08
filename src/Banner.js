import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    async function fetchData() {
      //Choisir un film au hasard dans l'API : section NETFLIX ORIGINALS
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  //Fonction permettant de changer le film a l'affiche a chaque actualisation de la page
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
    //Image du film en question
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        {/*Afficher le titre du film a l'affiche*/}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/*Creation des boutons play et ma liste*/}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/*Afficher le synopsys du film a l'affiche*/}
        <h1 className="banner_description">{truncate(movie?.overview)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>

  )
}

export default Banner
