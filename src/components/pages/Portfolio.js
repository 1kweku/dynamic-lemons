import React from "react";
import "../../styles/portfolio.css";

export default function Portfolio() {
  //const handleClick = () => {};
  return (
    <div className="portfolio" id="portfolio">
      <a className="movie-lovers" href="https://movie-lover.herokuapp.com/">
        <img src={require(`../../images/movie-lovers.png`)} alt="movie" />
        {"Movie Lovers "}
      </a>
      <a
        className="movie-randomizer"
        href="https://faye3091.github.io/Movie-Randomizer/"
      >
        <img src={require(`../../images/randomizer.png`)} alt="randomizer" />
        {"Movie Randomizer "}
      </a>
      <a
        className="ecommerce"
        href="https://github.com/1kweku/ecommerce-backend"
      >
        {" "}
        <img
          src={require(`../../images/ecommerce.png`)}
          alt="ecommerce-backend"
        />
        {"Ecommerce"}
      </a>
      <a
        className="note-taker"
        href="https://blooming-tor-94074.herokuapp.com/"
      >
        <img src={require(`../../images/note-taker.png`)} alt="note-taker" />
        {"Note taker"}
      </a>
      <a className="quiz" href="https://1kweku.github.io/Coding-FUNdamentals/">
        <img src={require(`../../images/quiz.png`)} alt="quiz" />
        {"Intro Quiz "}
      </a>
      <a
        className="office-manager"
        href="https://github.com/1kweku/dreamteam"
        img="true"
      >
        {" "}
        <img src={require(`../../images/dreamteam.png`)} alt="dreamteam" />
        {"Dreamteam"}
      </a>{" "}
    </div>
  );
}
