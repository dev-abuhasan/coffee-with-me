import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainNav from './components/reuseable/mainNav/mainNav';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Info from './pages/info/info';
import Reservation from './pages/info/reservation/reservation';
import Testimonial from './pages/info/testimonial/testimonial';
import Menu from './pages/menu/menu';
import Service from './pages/service/service';

const App = () => {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/info" element={<Info />}>
          <Route path="reservation" element={<Reservation />} />
          <Route path="testimonial" element={<Testimonial />} />
        </Route>

        <Route path="/menu" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;