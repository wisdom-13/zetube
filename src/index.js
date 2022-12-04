import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Youtube from './service/youtube';

const root = ReactDOM.createRoot(document.getElementById('root'));
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
root.render(
  <React.StrictMode>
    <div className='container mx-auto px-4'>
      <App youtube={youtube} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
