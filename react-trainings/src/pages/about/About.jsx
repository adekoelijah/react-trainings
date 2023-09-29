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
    At Adeks trainer, we believe that fitness is not just a destination; 
    it's a lifelong journey to a healthier, happier you. Our mission is to empower individuals of 
    all backgrounds and fitness levels to unlock their full potential and transform their
     lives through dedicated training and wellness coaching.!
    </Header>

    <section className='about__story'>
      <div className="container about__story_container">
        <div className="about__section-imag">
          <img src={storyImage} alt="story" />
        </div>
        <div className="about__section-content">
          <h1>Our story</h1>
          <p>At Adeks, our journey in the world of fitness and wellness began with a simple yet powerful belief: 
            that every individual possesses the potential to lead a healthier, happier life. 
            Our story is one of passion, commitment, and the unwavering desire to help others discover their 
            own strength and vitality.


          </p>
          <p>
          The Genesis Our founder, Adeko, has always been fascinated by the incredible
          capabilities of the human body. Their personal journey towards fitness ignited a 
          profound passion for helping others harness their physical and mental potential. 
          Thus, the idea of Adeks was born.
          </p>
          <p>
          Our dedicated team of trainers shares a common mission: to inspire, motivate, 
          and guide individuals towards healthier, happier lives. We're not just
           trainers; we're partners in your fitness journey.
          </p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision_container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>At Adeks, we envision a world where individuals 
            of all backgrounds, ages, and fitness levels are empowered to 
            lead healthier, more fulfilling lives. Our vision is anchored in the 
            belief that the journey to well-being is both accessible and transformative, 
            and we are committed to being the catalyst for change.
          </p>
          <p>
          Our vision begins with the understanding that health is not 
          merely the absence of illness but a holistic state of well-being encompassing physical, 
          mental, and emotional vitality. We strive to inspire and educate individuals to 
          prioritize their health and embrace the incredible potential that comes with it.
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
          <h1>Our Mission</h1>
          <p>Our mission begins with the understanding that health and well-being are essential 
            components of a fulfilling life. We are dedicated to breaking down barriers
             and misconceptions surrounding fitness, 
            ensuring that it becomes an inclusive and transformative journey for all.
          </p>
          <p>
          We are on a mission to educate and inspire. Our goal is to equip 
          individuals with the knowledge, skills, and confidence they need to make 
          informed choices about their health. We provide not just workouts but a 
          comprehensive understanding of the principles behind them.
          </p>
          <p>
          Our mission extends beyond the physical. 
          We advocate for holistic wellness, encompassing mental and emotional
           well-being as equally vital components of a healthy life. Our training programs 
           are designed to nurture not just the body but the mind and spirit as well.


          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About