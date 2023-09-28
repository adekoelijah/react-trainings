import { Link } from "react-router-dom"
import image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100daysOfWorkOut</h4>
          <h1>Join the legend of the fitness world</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sed! Ab facere obcaecati libero beatae!</p>
          <Link to ="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt="main header img" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader