import { BsBell} from'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { BiLogoYoutube } from 'react-icons/bi'
import { CiImageOn } from 'react-icons/ci'
import { AiOutlinePlaySquare } from "react-icons/ai"
import  { BiSearchAlt2 } from "react-icons/bi"

import '../styles/navbar.css'

const Navbar = () =>{
    return(
      <div className='navBar'>
        <div className="nav-container">
        
              <div className='nav-left'>
                <img className="logo" src="https://seeklogo.com/images/P/pexels-logo-EFB9232709-seeklogo.com.png" alt="logo"/>
            <h2 className='pexel1'>Pexels</h2>
            </div>
            <div className="nav-right">
            <select className="nav-explore-links">
                <option ><h3 className="nav-explore">Explore</h3></option>
                <option className="nav-explore">Discover Photos</option>
                <option className="nav-explore">Popular Searches</option>
                <option className="nav-explore">Leaderboard</option>
                <option className="nav-explore">Challenges</option>
                <option className="nav-explore">Free Vedios</option>
                <option className="nav-explore">Pexels Blog</option>
            </select>
            <h4 className="license">License</h4>
          <div className='bell'>
            <BsBell className="notification"/>
          </div> 
           <div className='profile'>
            <BsPersonCircle className='profile1'/>
      <select className='login'>
        <option className='login-links'></option>
        <option className='login-links'>Your Collections</option>
        <option className='login-links'>Setings</option>
        <option className='login-links'>Change Language</option>
        <option className='login-links'>Logout</option>
        <option className='login-links'>Image & Vedio API</option>
        <option className='login-links'>Apps & Plugins</option>
        <option className='login-links'>FAQ</option>
        <option className='login-links'>Partnership</option>
        <option className='login-links'>Imprint & Terms</option>
        <option className='login-links'></option>
        <BiLogoFacebook className='link'/>
        <AiOutlineTwitter className='link'/>
        <AiOutlineInstagram className='link'/>
        <BiLogoPinterestAlt className='link'/>
        <BiLogoYoutube className='link'/>
      </select>
          </div>
          <button className='upload'>Upload</button>
          </div>
          
          
     
    </div>
    <div className='titles'>
        <h1 className='title'>The best free stock photos, royalty free </h1>
        <h1 className='title'>images & videos shared by creators.</h1>
        </div>
        <div className='search'>
        <div className='drag'>   
          <select>
          <option><CiImageOn className="img"/> Photos</option>
          <option><AiOutlinePlaySquare className="ved"/> Vedios</option>
        </select>
          </div>
          <div>
          <input className='find' type='text' placeholder='Search for free Photos'></input>
          </div>
          <div>
          <BiSearchAlt2 className="icon"/>
          </div>
      </div>
      </div>
      ) 

    }


export default Navbar;