import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpeg'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get in Touch" image ={HeaderImage}>
    We're excited to connect with you and help you embark on your fitness journey. 
    Whether you have questions, want to schedule a consultation,
     or are ready to take the first step towards a healthier, more vibrant you, 
     we're here to assist you.
     Feel free to reach out to us through any of the following methods:
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wraper">
          <a href="mailto:adekoelijah@gmail.com" target='_blank' rel='noreferrer noopener'><AiOutlineMail/></a>
          <a href="http://m.me/oladekan" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer noopener'><BsWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact