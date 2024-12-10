import IndexAdmin from "../backend";
import MovieSchedule from "../backend/pages/QLLC/MovieSchedule";
import QuanLyPhongChieu from "../backend/pages/QLPC/qlpc";


const BackendRoute= [
    { 'path': '/admin/MovieSchedule', 'component': MovieSchedule },
    { 'path': '/admin/quanlyphongchieu', 'component': QuanLyPhongChieu },

]
export default BackendRoute;