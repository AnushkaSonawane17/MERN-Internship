import Car from './assets/Car_showroom.png';
import flipkart from './assets/Flipkart.png';
import Flower from './assets/flower.png';
import sign from './assets/sign.png';
import Netflix from './assets/Netflix.png';
import ToDo from './assets/todo.png';
import './Portfolio.css';
import { FaGithub } from "react-icons/fa";
export default function Portfolio(){
return<>
 <header>
    <nav>
        <h1 id="name"><u>Anushka</u></h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li> <a href="#about">About Me</a></li>
            <li> <a href="#skills">Skills</a></li>
            <li> <a href="#project">Projects</a></li>
        </ul>
        <a href="#contact">
        <button>Contact me</button>
        </a>
    </nav>
   </header>

     <section id="home">
        <div id="hero-left">
        <h2>Hi,</h2>
        <h1>I'm Anushka</h1>
        <h2 id="dev">A Frontend Developer</h2>
        <p>I build responsive and interactive websites using HTML, CSS and JavaScript.</p>
        </div>
        <div id="hero-right">
        </div>
        </section>


        <section id="about">
            <h2><center><u>About Me</u></center></h2><br />
            <p>I am Anushka Sonawane, currently pursuing Diploma in Computer Engineering in Y.B Patil Polytechnic, Akurdi. I am also working as an intern in Linkcode Technologies, strengthening my skill set by hands on work. I am fascinated in Web development and working more on it, especially on making the frontend interactive. Strengthening JavaScript, HTML, CSS, React js, Node js, etc.</p>
        </section>
        
        <section id="skills">
            <h2><center><u>Skills</u></center></h2><br />
           <div id="skill-container">
            <div className="skill-box">C</div>
            <div className="skill-box">C++</div>
            <div className="skill-box">Java</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">HTML</div>
            <div className="skill-box">CSS</div>
            <div className="skill-box">Git/GitHub</div>  
            </div>
        </section>

        <section id="project">
          <h2><center><u>Projects</u></center></h2>
          <div id="project-box">
            <div className="projects">
                <div className="project-img" style={{backgroundImage: `url(${flipkart})`}}>
                </div>
                <h4>Flipkart Login page clone</h4>
                <h4><a href="http://127.0.0.1:5500/Flipkart.html" className='web'>Website</a></h4>
            </div>
            <div className="projects">
                <div className="project-img" style={{backgroundImage: `url(${sign})`}}>
                </div>
                <h4>Sign in page with OTP generation</h4>
                <h4><a href="http://127.0.0.1:5501/Sign_in.html" className='web'>Website</a></h4>
            </div>
            <div className="projects">
                <div className="project-img" style={{backgroundImage: `url(${Car}`}}>
                </div>
                <h4>Interactive Car Showroom Website</h4>
                <h4><a href="http://127.0.0.1:5500/searchBar.html" className='web'>Website</a></h4>
            </div>
            <div className="projects">
                <div className="project-img" style={{backgroundImage: `url(${Flower})`}}>
                </div>
                <h4>Flower using animations</h4>
                <h4><a href="http://127.0.0.1:5500/Flower.html" className='web'>Website</a></h4>
            </div>
            <div className="projects">
                <div className="project-img" style={{backgroundImage: `url(${Netflix})`}}>
                </div>
                <h4>Netflix Clone</h4>
                <h4><a href="http://127.0.0.1:5500/Netflix.html" className='web'>Website</a></h4>
            </div>
            <div className="projects">
                <div className="project-img" style={{backgroundImage: `url(${ToDo})`}}>
                </div>
                <h4>To-Do app</h4>
                <h4><a href="http://127.0.0.1:5501/To-do.html" className='web'>Website</a></h4>
            </div>
          </div>
        </section>

        <section id="contact">
            <h2><center><u>Contact me</u></center></h2><br /><br /><br />
            <p>Email : anushkadilipsonawane.7777@gmail.com</p>

            <p>Phone : +91 XXXXX XXXXX</p>
            <div id="socials">
             <a href="https://github.com/AnushkaSonawane17"><FaGithub style={{fontSize:"34px"}}/></a>
            </div>

            <footer>

            <p>© 2026 Anushka. All Rights Reserved.</p>

            </footer>

        </section>
        </>
}