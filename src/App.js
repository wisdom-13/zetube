import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideosDetail';

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

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
