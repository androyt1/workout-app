import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
    </div>
  )
}

export default App