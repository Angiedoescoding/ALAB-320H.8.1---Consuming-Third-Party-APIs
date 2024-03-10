import { useState } from 'react'
import './App.css'
//Import different pages
import StarShipCard from './components/StarShipCard';


//Import react router DOM tools
import { Routes, Route } from 'react-router-dom';

function App() {



  return (
    <> 
      <StarShipCard />
      <Routes>
    hello test
        {/* <Route path='/' element={< />} /> */}
        {/* <Route path='/' element={< />} />
        <Route path='/' element={< />} />
        <Route path='/' element={< />} /> */}
      </Routes>
    </>
  )
}

export default App



//
// Endpoints

// /starships/ -- get all the starship resources
// /starships/:id/ -- get a specific starship resource
// https://swapi.tech/documentation#starships