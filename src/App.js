import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import {browserHistory} from "react-router-dom"
import 'react-modal-video/scss/modal-video.scss';
import "./assets/vendor/switcher/switcher.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import './assets/css/style.css';

//layout
import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import ComingSoon from "./pages/ComingSoon";
import Construction from "./pages/Construction";
import Error404 from "./pages/Error404";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Services from "./pages/Services";
import ServicesDetail from "./pages/ServicesDetail";
import BlogGrid from "./pages/BlogGrid";
import LargLeftSidebar from "./pages/LargLeftSidebar";
import ListLeftSidebar from "./pages/ListLeftSidebar";
import BlogDetail from "./pages/BlogDetail";
import BlogDetail1 from './pages/BlogDetail1';
import BlogDetail2 from './pages/BlogDetail2';
import ContectUs from "./pages/ContectUs";
import Landingpage from './pages/Landingpage';
import Landingpage2 from './pages/Landigpage2';
import Landingpage3 from './pages/Landingpage3';
import Landingpage4 from './pages/Landingpage4';
import Landingpage5 from './pages/Landingpage5';

function App() {
  
  return (
    <Router basename="/">
      <div className="page-wraper">
        <Routes >
          <Route path="/under-construct"  element={<Construction />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route  path="/about-us" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/error-404" element={<Error404 />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio-details" element={<PortfolioDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-details" element={<ServicesDetail />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-large-left-sidebar" element={<LargLeftSidebar />} />
            <Route path="/blog-list-left-sidebar" element={<ListLeftSidebar />} />
            <Route path="/:name/1" element={<BlogDetail />} />
            <Route path="/:name/2" element={<BlogDetail1 />} />
            <Route path="/:name/3" element={<BlogDetail2 />} />


            <Route path="/contact-us" element={<ContectUs />} />
            <Route path="/UPVC-windows-in-mohali" element={<Landingpage />} />
            <Route path="/aluminium-windows-and-doors-in-mohali" element={<Landingpage2 />} />
            <Route path="/aluminium-windows-and-doors" element={<Landingpage3 />} />
            <Route path="/upvc-windows-and-doors" element={<Landingpage4 />} />
            <Route path="/construction-company-in-Mohali" element={<Landingpage5 />} />




          </Route>
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
