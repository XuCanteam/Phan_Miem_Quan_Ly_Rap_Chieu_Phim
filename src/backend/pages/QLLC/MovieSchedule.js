// MovieSchedule.js
import React, { useState } from "react";
import './MovieSchedule.css';


const schedules = [
  { id: 1, movieTitle: "The Dark Knight", showTime: "2024-12-10 20:00", cinema: "Galaxy Cinema", status: "Đang chiếu" },
  { id: 2, movieTitle: "Inception", showTime: "2024-12-12 18:30", cinema: "Lotte Cinema", status: "Sắp chiếu" },
  { id: 3, movieTitle: "The Matrix", showTime: "2024-12-15 21:00", cinema: "CGV", status: "Đang chiếu" },
  { id: 4, movieTitle: "Titanic", showTime: "2024-12-18 17:00", cinema: "BHD Star", status: "Sắp chiếu" },
  { id: 5, movieTitle: "The Shawshank Redemption", showTime: "2024-12-20 19:30", cinema: "MegaStar", status: "Đã chiếu" },
];

const MovieSchedule = () => {
  const [movieSchedules, setMovieSchedules] = useState(schedules);

  return (
        <div className="schedule-container">
        <h2>Quản Lý Lịch Chiếu Phim</h2>
        <table className="schedule-table">
                    <thead>
                    <tr>
                        <th>Tên Phim</th>
                        <th>Ngày Giờ Chiếu</th>
                        <th>Rạp Chiếu</th>
                        <th>Trạng Thái</th>
                        <th>Chỉnh Sửa</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movieSchedules.map((schedule) => (
                        <tr key={schedule.id}>
                        <td>{schedule.movieTitle}</td>
                        <td>{schedule.showTime}</td>
                        <td>{schedule.cinema}</td>
                        <td>
                            <span className={`status ${schedule.status === "Đang chiếu" ? "in-progress" : schedule.status === "Sắp chiếu" ? "upcoming" : "completed"}`}>
                            {schedule.status}
                            </span>
                        </td>
                        <td>
                            <button className="edit-button">Sửa</button>
                            <button className="delete-button">Xóa</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
        </table>
        </div>
  );
};

export default MovieSchedule;
