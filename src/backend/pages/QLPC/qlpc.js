import React, { useState } from "react";
import './qlpc.css';

const QuanLyPhongChieu = () => {
  const [phongChieus, setPhongChieus] = useState([
    { id: 1, tenPhong: "Phòng 1", soGhe: 100, tinhTrang: "Hoạt động", moTa: "" },
    { id: 2, tenPhong: "Phòng 2", soGhe: 80, tinhTrang: "Hoạt động", moTa: "" },
  ]);
  const [form, setForm] = useState({
    tenPhong: "",
    soGhe: "",
    tinhTrang: "",
    moTa: "",
  });
  const [editId, setEditId] = useState(null);

  // Xử lý thay đổi form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Xử lý thêm hoặc cập nhật phòng
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Cập nhật phòng
      setPhongChieus((prev) =>
        prev.map((phong) =>
          phong.id === editId ? { ...phong, ...form, id: editId } : phong
        )
      );
      setEditId(null);
    } else {
      // Thêm mới phòng
      setPhongChieus((prev) => [
        ...prev,
        { ...form, id: Date.now(), soGhe: Number(form.soGhe) },
      ]);
    }
    setForm({ tenPhong: "", soGhe: "", tinhTrang: "", moTa: "" });
  };

  // Xử lý xóa phòng
  const handleDelete = (id) => {
    setPhongChieus((prev) => prev.filter((phong) => phong.id !== id));
  };

  // Xử lý chỉnh sửa phòng
  const handleEdit = (id) => {
    const phong = phongChieus.find((phong) => phong.id === id);
    setForm(phong);
    setEditId(id);
  };

  return (
    <div>
      <h2>Quản Lý Phòng Chiếu</h2>

      {/* Form Thêm/Chỉnh sửa */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tenPhong"
          value={form.tenPhong}
          onChange={handleChange}
          placeholder="Tên Phòng"
          required
        />
        <input
          type="number"
          name="soGhe"
          value={form.soGhe}
          onChange={handleChange}
          placeholder="Số Ghế"
          required
        />
        <select
          name="tinhTrang"
          value={form.tinhTrang}
          onChange={handleChange}
          required
        >
          <option value="">Chọn Tình Trạng</option>
          <option value="Hoạt động">Hoạt động</option>
          <option value="Ngưng hoạt động">Ngưng hoạt động</option>
        </select>
        <textarea
          name="moTa"
          value={form.moTa}
          onChange={handleChange}
          placeholder="Mô Tả"
        ></textarea>
        <button type="submit">{editId ? "Cập nhật" : "Thêm mới"}</button>
      </form>

      {/* Danh sách phòng chiếu */}
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Phòng</th>
            <th>Số Ghế</th>
            <th>Tình Trạng</th>
            <th>Mô Tả</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {phongChieus.map((phong, index) => (
            <tr key={phong.id}>
              <td>{index + 1}</td>
              <td>{phong.tenPhong}</td>
              <td>{phong.soGhe}</td>
              <td>{phong.tinhTrang}</td>
              <td>{phong.moTa}</td>
              <td>
                <button onClick={() => handleEdit(phong.id)}>Sửa</button>
                <button onClick={() => handleDelete(phong.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuanLyPhongChieu;
