import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Detail from "../views/Detail";
import NotFound from "../views/NotFound";

const Router = () => {
    return (
      <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/detail/:id" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      </React.Fragment>
    )
  }
  
  export default Router;