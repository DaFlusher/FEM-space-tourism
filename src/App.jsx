import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import NavBar from './Components/Nav/NavBar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/technology" element={<Technology/>} />
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
