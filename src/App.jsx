
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProctedRoute from './components/ProctedRoute'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/Success' element={< ProctedRoute element={<Success/>}/>}/>
       <Route path='/*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
