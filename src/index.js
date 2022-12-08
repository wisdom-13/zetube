import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Youtube from './service/youtube';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideosDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />,

      },
      {
        path: '/videos',
        element: <Videos />
      },
      {
        path: '/videos/:keyword',
        element: <Videos />
      },
      {
        path: '/videos/watch/:videoId',
        element: <VideoDetail />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
