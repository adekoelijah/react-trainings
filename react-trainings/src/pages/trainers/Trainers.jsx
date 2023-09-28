import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpeg'
import { trainers } from '../../data'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../components/Trainer'

import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Trainers" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti vitae quasi, 
      tempora aut architecto magni reiciendis delectus sapiente rem.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) =>{
            return<Trainer key={id} image={image} name = {name} job ={job} socials ={
              [
                {icon:<AiFillInstagram/>, link: socials[0]},
                {icon:<AiOutlineTwitter/>, link: socials[2]},
                {icon:<BiLogoFacebook/>, link: socials[1]},
                {icon:<FaLinkedinIn/>, link: socials[3]}
              ]
            }/> 

            
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers