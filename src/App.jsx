import { useState, useEffect } from 'react'
import './App.css'
//Import different pages
import StarShipCard from './components/StarShipCard';
import NavBar from './components/NavBar'
import { getAllStarships } from './services/Swapi.jsx'


//Import react router DOM tools
//import { Routes, Route } from 'react-router-dom';

function App() {

  

  return (
    <> 
      <NavBar />
    <div>


    </div>
    </>
  )
}

export default App



//
// Endpoints

// /starships/ -- get all the starship resources
// /starships/:id/ -- get a specific starship resource
// https://swapi.tech/documentation#starships