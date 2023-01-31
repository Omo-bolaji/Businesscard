import { FaTwitter } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer () {
    return(
        <>
        <div className="containerFour">
        <FaTwitter className="twitter" />
        <FaFacebook className="facebook"/>
        <FaInstagram className="instagram"/>
        <FaGithub className="github"/>
        </div>
        </>
       ) 
}
export default Footer;
