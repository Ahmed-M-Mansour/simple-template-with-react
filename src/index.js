import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter  , Routes , Route } from 'react-router-dom'
import './index.css';
import Projects from './components/Projects/Projects.jsx'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route exact  path="/" element={<App />}  >
    <Route path="projects" element={<Projects/>} />
    </Route>
     </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

;
