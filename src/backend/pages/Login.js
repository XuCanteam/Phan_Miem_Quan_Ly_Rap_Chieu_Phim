import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider"; // Import useAuth để quản lý xác thực người dùng
import "./Login.css"; // Đảm bảo có file CSS để tạo kiểu cho trang đăng nhập

const Login = () => {
  const { login } = useAuth(); // Lấy phương thức login từ AuthProvider
  const navigate = useNavigate(); // Sử dụng useNavigate để chuyển hướng đến trang admin

  const [email, setEmail] = useState(""); // State để lưu email
  const [password, setPassword] = useState(""); // State để lưu mật khẩu

  const handleLogin = () => {
    // Kiểm tra email và password (hoặc có thể gọi API để đăng nhập)
    if (email && password) {
      login(); // Xác nhận người dùng đã đăng nhập thành công
      navigate("/admin"); // Chuyển hướng đến trang admin
    } else {
      alert("Please enter email and password"); // Thông báo nếu thiếu thông tin
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
