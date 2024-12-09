// MovieList.js
import React from "react";
import './MovieList.css';

const movies = [
  { id: 1, title: "The Dark Knight", genre: "Action, Crime", year: 2008 },
  { id: 2, title: "Inception", genre: "Action, Sci-Fi", year: 2010 },
  { id: 3, title: "The Matrix", genre: "Action, Sci-Fi", year: 1999 },
  { id: 4, title: "Titanic", genre: "Drama, Romance", year: 1997 },
  { id: 5, title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
];

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h2>Danh Sách Phim</h2>
      <table className="movie-table">
        <thead>
          <tr>
            <th>Tên Phim</th>
            <th>Thể Loại</th>
            <th>Năm Sản Xuất</th>
            <th>Chi Tiết</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
              <td>
                <button className="detail-button">Xem Chi Tiết</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
