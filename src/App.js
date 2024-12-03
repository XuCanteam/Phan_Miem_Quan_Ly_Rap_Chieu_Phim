import logo from "./logo.svg";
import "./App.css";
import Index from "./frontend/index";
import { BrowserRouter as BrowserRouter,Routes,Route } from "react-router-dom";
import FrontendRoute from "./routes/frontend";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} >
        {FrontendRoute.map((route,index)=>{
              const Page =route.component;
          return (
        
            <Route key={index} path={route.path} element={<Page/>} />
          )

        })}
        </Route>
      </Routes>
      </BrowserRouter>);
}

export default App;
