import image from "../images/white girl.png"; 
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Info () {
    return(
        <>
        <div className="container">
        <img src={image} />
        <h1>Omobolaji</h1>
        <p className="container-text1">Frontend Developer</p>
        <p className="container-text2">Omobolaji.website</p>
        <div className="Buttons">
        <button className="emailBtn">  <FaEnvelope className="email"/> Email</button>
        <button className="linkedinBtn"> <FaLinkedin className="linkedin"/> Linkedin </button>
        </div>
        </div>
        </>
       ) 
}
export default Info;