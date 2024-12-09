import React from "react";
import Header from "./partial/header";
import Footer from "./partial/footer";
import Slider from "./partial/slider";
import NowInPlay from "./partial/nowinplay";
import CommingSoon from "./partial/commingsoon";
import New from "./partial/new";
import { Outlet } from "react-router-dom";
import Contact from "./partial/contact";
function Index() {
  return (
    <>
      <Header/>
      <Slider/>
      <div className="hienthi">
        <Outlet />  
        </div>
      
      <CommingSoon/>
      <New/>
      <Contact/>
     
   <   Footer/>
    </>
  );
}

export default Index;
