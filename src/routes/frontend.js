import Home from "../frontend/page/home/home";
import About from "../frontend/page/about/about";
import Contact from "../frontend/page/contact/contact";
import NotFound from "../frontend/page/NotFound";

const FrontendRoute = [
    { 'path': '/', 'component': Home },
    { 'path': '/about', 'component': About },
    { 'path': '/contact', 'component': Contact },
    { 'path': '*', 'component': NotFound },
]
export default FrontendRoute;  