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
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Doloremque fugit repellat ullam animi earum illo quam impedit, libero possimus fuga!
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