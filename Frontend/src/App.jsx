
import React from 'react'
import { Home, LandingPage } from './pages'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
     
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/feed'>
            <Route path='/feed/home' element={<Home/>}/>
          </Route>
        </Routes>
        

      </BrowserRouter>


    </div>
  )
}

export default App