
import './app.scss'
import HomePage from './Components/Home/HomePage'
import About from './Components/AboutMe/About'
import Contact from './Components/ContactMe/Contacts'
import Index from './Components/Layout/Index'
import {  HashRouter as Routes , Route } from 'react-router-dom'
function App() {
 

  return (
    <>
     <Routes>
            <Route path="/" element={< Index />}>
            <Route index element={< HomePage />}/>
            <Route path='about' element={< About />}/>
            <Route path='Contact' element={< Contact />}/>
            </Route>
     </Routes>
    </>
  )
}

export default App
