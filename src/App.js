import './App.css';

// import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import SearchBar from './components/SearchBar';


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
      <Outlet></Outlet>
    </>
  )
}

export default App;
