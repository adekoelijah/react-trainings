// import './nav.css'
// import { Link, NavLink } from 'react-router-dom'
// import {AiOutlineHome} from 'react-icons/ai'
// import {BiSolidUserCircle} from 'react-icons/bi'
// import {BsFillBookmarkStarFill} from 'react-icons/bs'
// import {RiServiceFill} from 'react-icons/ri'
// import {IoIosContacts} from 'react-icons/io'
// import { useState } from 'react'

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#')
//   return (
//     <nav>
//       <Link to ="/">{/* ="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> */}<AiOutlineHome/></Link>
//       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiSolidUserCircle/></a>
//       <a href="#gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''} ><BsFillBookmarkStarFill/></a>
//       <a href="#plans" onClick={() => setActiveNav('#plans')} className={activeNav === '#plans' ? 'active' : ''} ><RiServiceFill/></a>
//       <a href="#trainers" onClick={() => setActiveNav('#trainers')} className={activeNav === '#trainers' ? 'active' : ''} ><IoIosContacts/></a>
//       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><IoIosContacts/></a>
//     </nav>
//   )
// }

// export default Nav