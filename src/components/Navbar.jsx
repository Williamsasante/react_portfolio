import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from 'react-icons/fa';





const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        {/* <img  className="mx-2 w-10" src={logo}></img> */}
    </div>
     <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        
        <a href="https://www.linkedin.com/in/william-asante-3634aa238/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:a.williams.amoako@gmail.com" target="_blank" rel="noopener noreferrer" title="Email"><FaMailBulk /></a>
        <a href="https://github.com/Williamsasante" target="_blank" rel="noopener noreferrer" title="Github"><FaGithub /></a>
        <a href="" target="_blank" rel="noopener noreferrer" title="Download CV"><FaDownload /></a>
       
       


    </div>

  </nav>
  
}

export default Navbar
