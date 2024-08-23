import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import 'mouse-follower/src/scss/index.scss';



if(__PRODUCTION__){
  hydrateRoot(document.getElementById("root"), 
      <BrowserRouter>
        <App data={window.__INITIAL_DATA__}/>
      </BrowserRouter>
)
}
else{
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={window.__INITIAL_DATA__}/>
      </BrowserRouter>
  </React.StrictMode>
  );

}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
