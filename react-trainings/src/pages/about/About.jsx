import Header from '../../components/Header'
import headerImage from '../../images/header_bg_1.jpeg'
import storyImage from '../../images/about1.jpeg'
import visionImage from '../../images/about2.jpeg'
import missionImage from '../../images/about2.jpeg'

import './about.css'



const About = () => {
  return (
    <>
    <Header title="About Us" image ={headerImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Voluptatibus ab veritatis quasi voluptatem quis in eos excepturi facere fuga iste!
    </Header>

    <section className='about__story'>
      <div className="container about__story_container">
        <div className="about__section-imag">
          <img src={storyImage} alt="story" />
        </div>
        <div className="about__section-content">
          <h1>Our story</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ex veniam quos aliquam! Inventore totam neque soluta ex minima ratione.
             Non voluptatibus ipsa sed rerum rem impedit fuga aut aliquam explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia reprehenderit explicabo corrupti modi reiciendis alias vitae quasi? Commodi nesciunt quia officiis,
             ipsam molestias id quaerat, eius earum accusamus saepe quasi!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi consequatur. 
            Exercitationem molestias provident nobis placeat a vitae rerum!
          </p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision_container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ex veniam quos aliquam! Inventore totam neque soluta ex minima ratione.
             Non voluptatibus ipsa sed rerum rem impedit fuga aut aliquam explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia reprehenderit explicabo corrupti modi reiciendis alias vitae quasi? Commodi nesciunt quia officiis,
             ipsam molestias id quaerat, eius earum accusamus saepe quasi!
          </p>
        </div>
        <div className="about__section-imag">
          <img src={visionImage} alt="our vission" />
        </div>
      </div>
    </section>


    <section className='about__mission'>
      <div className="container about__mission_container">
        <div className="about__section-imag">
          <img src={missionImage} alt="mission" />
        </div>
        <div className="about__section-content">
          <h1>Our story</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ex veniam quos aliquam! Inventore totam neque soluta ex minima ratione.
             Non voluptatibus ipsa sed rerum rem impedit fuga aut aliquam explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia reprehenderit explicabo corrupti modi reiciendis alias vitae quasi? Commodi nesciunt quia officiis,
             ipsam molestias id quaerat, eius earum accusamus saepe quasi!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi consequatur. 
            Exercitationem molestias provident nobis placeat a vitae rerum!
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About