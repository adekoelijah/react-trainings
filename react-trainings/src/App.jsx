import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Nav from './components/Nav'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route index element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='contact' element ={<Contact/>}/>
      <Route path='gallery' element ={<Gallery/>}/>
      <Route path='trainers' element ={<Trainers/>}/>
      <Route path='*' element ={<NotFound/>}/>
      <Route path='plans' element ={<Plans/>}/>
    </Routes>
   {/*  <Nav/> */}
    <Footer/>
    </BrowserRouter> 
  )
}

export default App