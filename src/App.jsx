import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Ticket from './Ticket/Ticket'
import Login from './Login/Login'
import Logout from './Logout/Logout'
import Mainprofile from './Logout/Mainprofile/Mainprofile'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <nav>
        <img src="https://rssb.org/images/RSSBbox.jpg" className='sectionlogo'></img>
       </nav>
        <h1 className='sectionthree'>RSSB TICKET MANAGEMENT SOFTWARE</h1>
        <Login></Login>
        <Logout> </Logout>
        <Mainprofile></Mainprofile>
           
            <BrowserRouter>
               <Routes>
                <Route path='/Ticket' element={<Ticket/>}></Route>
               </Routes>
            </BrowserRouter>
            
    </>
  )
}

export default App
