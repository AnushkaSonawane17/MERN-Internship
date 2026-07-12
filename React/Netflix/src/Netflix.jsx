import './Netflix.css';
import logo from './assets/Netflix_logo.png';
import { HiMiniLanguage} from "react-icons/hi2";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
export default function Netflix(){
    return<>
    <img src={logo} alt=""/>
    <button id="t"><HiMiniLanguage style={{marginRight:"15px", fontSize:"20px"}}/>English <MdArrowDropDown style={{marginLeft:"5px", fontSize:"25px", marginTop:"5px"}} /></button>
    <button id="s">Sign in</button>
    <h1><p>Unlimited movies,<br /> shows, and more</p></h1>
    <h3>Starts at ₹149. Cancel at any time.</h3>
    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
    <input type="email" name="" id="" placeholder="Email address"/>
    <button id="g">Get Started <MdOutlineNavigateNext style={{fontSize:"40px"}}/></button>
    </>
}