import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Firstcomponent from './components/Firstcomponent.js';
import Secondcomponent from './components/Secondcomponent.js';
import ArrayPrint from './components/ArrayPrint.js';
import Parent from './components/Parent.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Firstcomponent/> 
    <Secondcomponent/>
    <ArrayPrint/>
    <Parent/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

