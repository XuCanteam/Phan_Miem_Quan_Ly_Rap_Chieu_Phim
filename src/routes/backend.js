import IndexAdmin from "../backend";
import MovieSchedule from "../backend/pages/QLLC/MovieSchedule";
const BackendRoute= [
    { 'path': '/admin', 'component': IndexAdmin },
    { 'path': '/admin/MovieSchedule', 'component': MovieSchedule },
]
export default BackendRoute;