import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './/Home';
import Search from './Search';
import MovieTicketBookingForm from './MovieTicketBookingForm';

const App = () => {
  return (
   
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/search" element={<Search/>}></Route>
    <Route path="/bookmovieticket" element={<MovieTicketBookingForm/>}></Route>
    </Routes>
  
  );
};

export default App;


