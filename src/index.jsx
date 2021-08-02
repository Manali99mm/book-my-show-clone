import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Context provider
import MovieProvider from "./context/movie.context"
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <MovieProvider>
          <App />
        </MovieProvider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);