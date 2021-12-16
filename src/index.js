import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import Home from './Home'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import VideoPage from './VideoPage';
import './index.css'
import FavPage from './FavPage';
import Error from './Error'

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
     <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="fav-videos" element={<FavPage />} />
        <Route path="study" element={<VideoPage />}>
        <Route path=":videoId" element={<VideoPage />} /> */}
        {/* </Route> */}
      </Routes>
      
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
