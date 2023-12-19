import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './Pages/Homepage/HomePage';
import Destination from './Pages/Destination/Destination';
import Crew from './Pages/Crew/Crew';
import Technology from './Pages/Technology/Technology';
import NavBar from './Components/Nav/NavBar';
import Mars from './Pages/Destination/Mars';
import Europa from './Pages/Destination/Europa';
import Titan from './Pages/Destination/Titan';
import Mark from './Pages/Crew/Mark';
import Ansari from './Pages/Crew/Ansari';
import Victor from './Pages/Crew/Victor';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/technology" element={<Technology/>} />
      <Route path="/destination/mars" element={<Mars/>} />
      <Route path="/destination/europa" element={<Europa/>} />
      <Route path="/destination/titan" element={<Titan/>} />
      <Route path="/crew/mark" element={<Mark/>} />
      <Route path="/crew/victor" element={<Victor/>} />
      <Route path="/crew/ansari" element={<Ansari/>} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
    
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App;
