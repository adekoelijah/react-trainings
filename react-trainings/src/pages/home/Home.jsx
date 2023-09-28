import Faqs from '../../components/Faqs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'

const Home = () => {
  return (
   <div>
     <MainHeader/>
     <Programs/>
     <Values/>
     <Faqs/>
     <Testimonials/>
     {/* <Footer/> */}
   </div>
  )
}

export default Home