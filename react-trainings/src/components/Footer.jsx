import { Link } from "react-router-dom"
import logo from '../images/logo.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to ="/" className="logo">
                    <img src={logo} alt="" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Soluta impedit animi error labore deleniti amet tempore voluptates suscipit quidem aspernatur.</p>
                <div className="footer__socials">
                    <a href="https://web.facebook.com/james.oladekan" target="_blank" rel="noreferrer noopener"><BsFacebook/></a>
                    <a href="https://www.linkedin.com/in/adeko-ayomide-3b2498217/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin/></a>
                    <a href="https://twitter.com/adekoa95" target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle/></a>
                    <a href="https://github.com/adekoelijah" target="_blank" rel="noreferrer noopener"><AiFillGithub/></a>
                    <a href="https://web.facebook.com/james.oladekan" target="_blank" rel="noreferrer noopener"><FiInstagram/></a>
                </div>
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to ="/about">About</Link>
                <Link to ="/plans">Plans</Link>
                <Link to ="/trainers">Trainers</Link>
                <Link to ="/gallery">Gallery</Link>
                <Link to ="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insight</h4>
                <Link to ="/s">Blog</Link>
                <Link to ="/s">Case study</Link>
                <Link to ="/s">Communities</Link>
                <Link to ="/s">Events</Link>
                <Link to ="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to ="/s">Contact Us</Link>
                <Link to ="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Adeks practice &copy; All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer