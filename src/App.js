import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Main from './components/Main'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
function App() {
  
  return (
    <BrowserRouter>

      <div id="page-wrapper">
        <Nav />
        <Header />
        <Main />
        <Highlights />
        <Intro />
        <Footer />
      </div>

      <Route path="/">
      </Route>
    </BrowserRouter>
  );
}

export default App;
