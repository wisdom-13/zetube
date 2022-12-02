import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideosDetail';
import { useEffect, useState } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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

function App({ youtube }) {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos))
  }, [youtube])

  return (
    <RouterProvider router={router}>
      {videos}
    </RouterProvider>
  );
}

export default App;
