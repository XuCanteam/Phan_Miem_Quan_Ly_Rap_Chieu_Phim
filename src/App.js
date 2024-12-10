import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Đảm bảo đã import Router, Routes, Route
import { AuthProvider } from './auth/AuthProvider';  // Import AuthProvider đúng vị trí
import ProtectedRoute from "./auth/ProtectedRoute";  // Import ProtectedRoute
import Login from "./backend/pages/Login";  // Import Login
import FrontendRoute from "./routes/frontend";  // Import FrontendRoute
import BackendRoute from "./routes/backend";  // Import BackendRoute
import Index from './frontend/index';  // Thêm dòng import cho Index
import IndexAdmin from "./backend";  // Import IndexAdmin
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Trang đăng nhập */}
          <Route path="/login" element={<Login />} />

          {/* Admin route */}
          <Route path="/" element={<Index />}>
            {FrontendRoute.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Route>

          {/* <Route
            path="/admin"
            element={<IndexAdmin/>}
            element={
              <ProtectedRoute>
                <IndexAdmin />
              </ProtectedRoute>
            }
          > */}
            {/* Render các route con */}
            {/* {BackendRoute.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Route> */}
            <Route path="/admin" element={<IndexAdmin/>}> 
            {
              BackendRoute.map((route,index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page/>}/>
              })
            }
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
