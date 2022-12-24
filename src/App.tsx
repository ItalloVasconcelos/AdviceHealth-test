import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'

import { ConsultPage } from './pages/ConsultPage'
import { BookingPage } from './pages/BookingPage'

export function App() {


  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path='/consult' element={<ConsultPage />} />

      </Routes>
    </div>
  )
}





