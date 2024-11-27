import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} />
      <div className="movie-card-info">
        <p className="movie-card-title">{movie.title}</p>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className="movie-card-year">{movie.rating}</p>
      </div>
    </div>
  );
}
