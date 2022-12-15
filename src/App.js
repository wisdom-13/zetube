import './App.css';

// import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App({ youtube }) {

  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   youtube.mostPopular().then(videos => setVideos(videos))
  // }, [youtube])

  // return (
  //   <RouterProvider router={router} videos={videos}></RouterProvider>
  // );

  return (
    <>
      <SearchBar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet></Outlet>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  )
}

export default App;
