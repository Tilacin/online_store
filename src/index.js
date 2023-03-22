import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.scss';
import 'macro-css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";
// //import { HashRouter as Router } from 'react-router-dom'
// import './index.scss';
// import 'macro-css'
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

