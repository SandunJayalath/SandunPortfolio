import { useEffect, useState, useRef } from "react";

// Importing The Icons
import { CloudSun } from 'lucide-react';
import { MoonStar } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { Check } from 'lucide-react';
import { MailPlus } from 'lucide-react';
import { Github } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { X } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

// Importing The Components
import Topic from "../components/Topic";
import Paragraphs from "../components/Paragraphs";
import SkillsCard from "../components/SkillsCard";
import ProjectCard from "../components/ProjectCard";

// Importing the Images
import carDealershipVideo from '../assets/carDealershipWebSite.gif'
import lamboLandingPageVideo from '../assets/lambo-web-site.gif'
import movieVideo from '../assets/movieApp.gif'
import TaskManagerVideo from '../assets/TaskManager.gif'
import BookManagerVideo from '../assets/BookManager.gif'

function HomePage() {

    // Switching the themes
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }

    // For the Nav Section
    
    useEffect(() => {
      const scrollSpy = document.querySelector('[data-bs-spy="scroll"]');
      if (scrollSpy) {
        window.bootstrap.ScrollSpy.getInstance(scrollSpy) ||
          new window.bootstrap.ScrollSpy(scrollSpy, {
            target: "#navbar-example2",
            rootMargin: "0px 0px -40%",
          });
      }
    }, []);

    // Creating the collapsing container for the navbar
    const [collapse, setCollapse] = useState(false)

      //  For slide from sides animation

      const domRef = useRef();
      const [isVisible, setIsVisible] = useState(false);
  
      useEffect(() => {
          const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => setIsVisible(entry.isIntersecting));
          });
  
          observer.observe(domRef.current);
  
      return () => observer.disconnect();
      }, []);

      // Second Animation
      const domRef2 = useRef();
      const [isVisible2, setIsVisible2] = useState(false);
  
      useEffect(() => {
          const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => setIsVisible2(entry.isIntersecting));
          });
  
          observer.observe(domRef2.current);
  
      return () => observer.disconnect();
      }, []);

      // Third Animation
      const domRef3 = useRef();
      const [isVisible3, setIsVisible3] = useState(false);
  
      useEffect(() => {
          const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => setIsVisible3(entry.isIntersecting));
          });
  
          observer.observe(domRef3.current);
  
      return () => observer.disconnect();
      }, []);

      // Fourth Animation
      const domRef4 = useRef();
      const [isVisible4, setIsVisible4] = useState(false);
  
      useEffect(() => {
          const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => setIsVisible4(entry.isIntersecting));
          });
  
          observer.observe(domRef4.current);
  
      return () => observer.disconnect();
      }, []);

      // Creating The Nav Section Color Changing
      
      // For the About Section
      const aboutSecRef = useRef();
      const [isAboutVisible, setIsAboutVisible] = useState(false);
  
      useEffect(() => {
          const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => setIsAboutVisible(entry.isIntersecting));
          });
  
          observer.observe(aboutSecRef.current);
  
      return () => observer.disconnect();
      }, []);

      // For the Project Section
      const projectSecRef = useRef();
      const [isProjectVisible, setIsProjectVisible] = useState(false);

      useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsProjectVisible(entry.isIntersecting));
        });

        observer.observe(projectSecRef.current);

    return () => observer.disconnect();
    }, []);

      // For the Experience Section
      const experienceSection = useRef();
      const [isExpVisible, setIsExpVisible] = useState(false);

      useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsExpVisible(entry.isIntersecting));
        });

        observer.observe(experienceSection.current);

    return () => observer.disconnect();
    }, []);

    // For the Contact Section
    const contactSection = useRef();
    const [isContactVisible, setIsContactVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setIsContactVisible(entry.isIntersecting));
      });

      observer.observe(contactSection.current);

  return () => observer.disconnect();
  }, []);

    // The Lightbox for the whatsapp number
    const [isContactBoxOpen, setIsContactBoxOpen] = useState(false);

    return (
        <>
        <nav id="navbar" className="navbar">
          <div className="container-lg">
            <a className="d-flex justify-content-center align-items-center gap-2 navbar-brand" href="/">
              <img src="./src/assets/theLogo.jpg" alt="the-brand-logo" style={{width: "60px"}}/>
              <div className="brand-text"><h5>Sandun</h5> <h6>| Front End Developer</h6></div>
            </a>

          {/* The button for the collapsing container at small screen size */}
          <button onClick={() => setCollapse(!collapse)} className="down-button">{ collapse === true ? <ChevronDown style={{width: "35px", height: "35px", transform: "rotate(180deg)", transition: "0.1s"}}/> : <ChevronDown style={{width: "35px", height: "35px", transform: "rotate(0deg)", transition: "0.1s"}}/>}</button>
          
          <div className="d-none d-lg-flex d-md-flex d-xl-flex nav nav-pills" style={{textAlign: "center"}}>
            <li className="nav-item">
              <a className={`nav-link ${isAboutVisible ? 'showing-link' : ''}`} href="#aboutSection">About Me</a>
              <div className="underline"></div>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isProjectVisible ? 'showing-link' : ''}`} href="#projectSection">Projects</a>
              <div className="underline"></div>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isExpVisible ? 'showing-link' : ''}`} href="#experienceSection">Experience</a>
              <div className="underline"></div>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isContactVisible ? 'showing-link' : ''}`} href="#contactSection">Contact Me</a>
              <div className="underline"></div>
            </li>
          </div>
            <button onClick={toggleTheme} className="toggle-theme-button">{theme === 'light' ? <MoonStar/> : <CloudSun/>}</button>
          </div> 
         
        </nav>

           {/* Collapsing Container */}
           {collapse && (
            <div className={`mt-4 collapsing-nav-links ${collapse ? `show` : 'hide'}`} style={{width: "100%"}}>
              <div className="row d-flex justify-content-center">
                <div className="col-6 d-flex justify-content-center">
                  <li className="nav-item">
                    <a className={`nav-link ${isAboutVisible ? 'showing-link' : ''}`} href="#aboutSection">About Me</a>
                    <div className="underline"></div>
                  </li>
                </div>

                <div className="col-6 d-flex justify-content-center">
                  <li className="nav-item">
                    <a className={`nav-link ${isProjectVisible ? 'showing-link' : ''}`} href="#projectSection">Projects</a>
                    <div className="underline"></div>
                  </li>
                </div>

                <div className="col-6 mt-4 d-flex justify-content-center">
                  <li className="nav-item">
                    <a className={`nav-link ${isExpVisible ? 'showing-link' : ''}`} href="#experienceSection">Experience</a>
                    <div className="underline"></div>
                  </li>
                </div>

                <div className="col-6 mt-4 d-flex justify-content-center">
                  <li className="nav-item">
                    <a className={`nav-link ${isContactVisible ? 'showing-link' : ''}`} href="#contactSection">Contact Me</a>
                    <div className="underline"></div>
                  </li>
                </div>
              </div>
            </div>
          )}

        <div className="container-fluid d-flex justify-content-center main-header" style={{marginTop: "100px"}}>
          <div className="container d-flex justify-content-center align-items-center gap-5" style={{flexDirection: "column", textAlign: "center"}}>
            <h1>Hi, I'm Sandun Sathyajith 👋</h1>
            <h3>I am a Front-End Developer | Passionate about Responsive Design & React</h3>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <a href="#projectSection"><button className="main-button">View My Works</button></a>
                <button className="main-button">Download Resume</button>
            </div>
            <div className="scrolling-indicator"><ArrowDown style={{width: "40px", height: "40px"}}/></div>
          </div>
        </div>

        <div id="aboutSection" ref={aboutSecRef} className="container pt-5 pb-5">
          <Topic title="About Me"/>
          <Paragraphs paragraph="Hi! I'm Sandun Sathyajith, a junior front-end developer who loves building clean, responsive websites using HTML, CSS and React. I am always learning and enjoy turning designs into smooth, interactive user experiences."/>
          <div className="row d-flex align-items-center justify-content-center">
            
          <SkillsCard
            subtleHeading="Core Web Technologies"
            skill1Image="./src/assets/htmlLogo.png" skill1="HTML5"
            skill2Image="./src/assets/cssLogo.png" skill2="CSS3"
            skill3Image="./src/assets/javascriptLogo.png" skill3="JavaScript" />

          <SkillsCard
            subtleHeading="Frameworks & Libraries"
            skill1Image="./src/assets/reactlogo.png" skill1="React.js"
            skill2Image="./src/assets/tailwindLogo.png" skill2="Tailwind CSS"
            skill3Image="./src/assets/bootstrapLogo.png" skill3="Bootstrap"/>

          <SkillsCard
            subtleHeading="Tools & Version Control"
            skill1Image="./src/assets/gitLogo.png" skill1="Git & GitHub"
            skill2Image="./src/assets/vsCode.png" skill2="VS Code"
            skill3Image="./src/assets/npmLogo.png" skill3="NPM"/>

          <SkillsCard
            subtleHeading="Design & UI Concepts"
            skill1Image="./src/assets/responsivenessLogo.png" skill1="Responsive"
            skill2Image="./src/assets/mobileLogo.png" skill2="Mobile First"
            skill3Image="./src/assets/figmaLogo.png" skill3="Basic Figma"/>

          </div>
        </div>

        <div className="container-fluid pb-3" style={{backgroundColor: "rgba(0, 0, 0, 0.16)"}}>
        <div id="projectSection" ref={projectSecRef} className="container pt-5">
          <Topic title="My Projects"/>
          <Paragraphs paragraph="Here is a selection of projects that showcase my skills in front-end development. From responsive layouts to dynamic user experiences, these projects reflect my growth, creativity, and love for building with modern web tools."/>
          
          <div className="container scrolling-container d-flex align-items-center p-3 gap-4" style={{width: "100%", overflowX: "auto"}}>
            
            <ProjectCard
              backgroundImage={lamboLandingPageVideo}
              name="Lamborghini Revuelto Landing page"
              description="High impact interactive landing page with scroll animations and mobile responsiveness"
              tag1="#React" tag2="#GSAP" tag3="#TailWind"
              demoPath="" codePath=""/>
            
            <ProjectCard
              backgroundImage={carDealershipVideo}
              name="Car Dealership Web Application"
              description="High impact interactive and responsive web site with multi pages, scroll animations and more features. This web application is created in React, Tailwind CSS, HTML."
              tag1="#React" tag2="#GSAP" tag3="#TailWind"
              demoPath="" codePath=""/>

            <ProjectCard
              backgroundImage={TaskManagerVideo}
              name="Task Manager"
              description="A Web application created by learning the Functions and the Hooks in React. This represents my react skills"
              tag1="#React" tag2="#Hooks" tag3="#TailWind"
              demoPath="" codePath=""/>

            <ProjectCard
              backgroundImage={movieVideo}
              name="Movie Web Application"
              description="High impact responsive Web-Site of a Movie Collection where you can add movies to your favorites and delete"
              tag1="#React" tag2="#API" tag3="#TailWind"
              demoPath="" codePath=""/>

            <ProjectCard
              backgroundImage={BookManagerVideo}
              name="Book Manager App"
              description="A Web application created by learning state management and hooks in React. This Book Manager project helps organize books and demonstrates my practical skills in building interactive React apps."
              tag1="#React" tag2="#Hooks" tag3="#TailWind"
              demoPath="" codePath=""/>

          </div>
        </div>
        </div>

        <div className="container pt-4 pb-5">
          <Topic title="My Journey"/>
          <Paragraphs paragraph="From leading to Launching Real Projects"/>
          <div className=" underline-on-topic-at-lg mt-3 mb-4"></div>
          
          <div ref={experienceSection} id="experienceSection" className="row d-flex justify-content-center align-items-center mt-5 mb-5">
            <div ref={domRef} className={`from-left ${isVisible ? 'visible' : ''} col-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center timeline-container`}>
              <div className="red-rect"></div>
              <div className="mt-4 text-center">
                <h1>📅 June - 2024</h1>
                <h2>🧠 Learning</h2>
              </div>
            </div>
            
            <div className="col-12 col-md-12 col-lg-8 col-xl-8 d-flex justify-content-center align-items-center mt-md-5 mt-5 mt-lg-0 mt-xl-0" style={{flexDirection: "column"}}>
              <h3 className="learnt-topics">Introduction to Programming with Python</h3>
              <Paragraphs paragraph="Self-Learning Journey"/>
              <div className="learnt-content" style={{justifyContent: "flex start", color: "var(--paragraph-color)"}}>
                <h5><Check className="checkmark"/>Learned programming basics: variables, loops and conditions</h5>
                <h5><Check className="checkmark"/>Learned and Solved 50+ beginner algorithms</h5>
                <h5><Check className="checkmark"/>Gained strong broblem solving foundation for front-end logic</h5>
              </div>
            </div>
          </div>
          <div className=" underline-on-topic mt-3 mb-4"></div>

          <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
            
            <div className="col-12 col-md-12 col-lg-8 col-xl-8 d-flex justify-content-center align-items-center mb-md-5 mb-5 mt-lg-0 mb-xl-0" style={{flexDirection: "column"}}>
              <h3 className="learnt-topics">Learning Java</h3>
              <Paragraphs paragraph="Self-Learning Via Youtube Tutorials & Documentations"/>
              <div className="learnt-content" style={{justifyContent: "flex start", color: "var(--paragraph-color)"}}>
                <h5><Check className="checkmark"/>Learned more about classes, inheritances</h5>
                <h5><Check className="checkmark"/>Built a small Note Pad & a Calculator Software with JavaFX</h5>
                <h5><Check className="checkmark"/>Strengthened logic building and structured thinking</h5>
              </div>
            </div>

            <div ref={domRef3} className={`from-right ${isVisible3 ? 'visible' : ''} col-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center timeline-container`}>
              <div className="red-rect"></div>
              <div className="mt-4 text-center">
                <h1>📅 Octomber - 2024</h1>
                <h2>Learning & Creating</h2>
              </div>
            </div>
          </div>
          <div className=" underline-on-topic mt-3"></div>

          <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
          <div ref={domRef2} className={`from-left ${isVisible2 ? 'visible' : ''} col-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center timeline-container`}>
              <div className="red-rect"></div>
              <div className="mt-4 text-center">
                <h1>📅 July - 2024</h1>
                <h2>Learning & Creating</h2>
              </div>
            </div>
            
            <div className="col-12 col-md-12 col-lg-8 col-xl-8 d-flex justify-content-center align-items-center mt-md-5 mt-5 mt-lg-0 mt-xl-0" style={{flexDirection: "column"}}>
              <h3 className="learnt-topics">Learning The Core Web: HTML, CSS & Js</h3>
              <Paragraphs paragraph="Self-Paced Study & Practice Projects"/>
              <div className="learnt-content" style={{justifyContent: "flex start", color: "var(--paragraph-color)"}}>
                <h5><Check className="checkmark"/>Built small static websites using HTML and custom CSS</h5>
                <h5><Check className="checkmark"/>Learned core javaScript concepts and created a Calculator</h5>
                <h5><Check className="checkmark"/>Created and Learned more about Core Web</h5>
              </div>
            </div>
          </div>
          <div className=" underline-on-topic mt-3 mb-2"></div>

          <div className="row d-flex justify-content-center align-items-center mt-4">
            
            <div className="col-12 col-md-12 col-lg-8 col-xl-8 d-flex justify-content-center align-items-center mb-md-5 mb-5 mt-lg-0 mb-xl-0" style={{flexDirection: "column"}}>
              <h3 className="learnt-topics">Building Impactful Front-End Projects & Crafting Unique Web Experiences</h3>
              <Paragraphs paragraph="Personal Projects & Open Source Contributions"/>
              <div className="learnt-content" style={{justifyContent: "flex start", color: "var(--paragraph-color)"}}>
                <h5><Check className="checkmark"/>Learned to create sleek, responsive websites using React, Tailwind CSS and modern web tools</h5>
                <h5><Check className="checkmark"/>I focused on performance, animations and UI/UX excellence to deliver top-tier user experiences</h5>
                <h5><Check className="checkmark"/>Collaborating on open-source and continuously improving through real-world challenges.</h5>
                <h5><Check className="checkmark"/>Passionate about turning ideas into interactive digital products</h5>
              </div>
            </div>

            <div ref={domRef4} className={`from-right ${isVisible4 ? 'visible' : ''} col-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center timeline-container`}>
              <div className="red-rect"></div>
              <div className="mt-4 text-center">
                <h1>📅Dec - 2024 Till Present</h1>
                <h2>Learning & Creating</h2>
              </div>
            </div>
          </div>

        </div>

        <div className="container-fluid pb-3" style={{backgroundColor: "rgba(0, 0, 0, 0.16)"}}>
        <div id="contactSection" ref={contactSection} className="container pt-5">
          <Topic title="Contact Me"/>
          <Paragraphs paragraph="Have a project in mind, or just want to say hi? Let’s chat!"/>
          
          <div className="row d-flex gap-3 mb-5" style={{ justifyContent: "center" }}>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 info-card" style={{ textAlign: "center", padding: "10px", borderRadius: "10px" }}>
                  <h4><MailPlus/>E-Mail</h4>
                  <div className=" underline-on-topic mt-3 mb-2"></div>
                  <h5>sandunsathyajith1@gmail.com</h5>
              </div>

              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 info-card" style={{ textAlign: "center", padding: "10px", borderRadius: "10px" }}>
                  <h4><Github/>Git Hub</h4>
                  <div className=" underline-on-topic mt-3 mb-2"></div>
                  <a href="https://github.com/SandunJayalath/" target="_blank" className="contact-link" rel="noopener noreferrer"><h6>Check out My GitHub</h6></a>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 info-card" style={{ textAlign: "center", padding: "10px", borderRadius: "10px" }}>
                  <h4><Phone/>Phone Number</h4>
                  <div className=" underline-on-topic mt-3 mb-2"></div>
                  <h5>+94-760556766</h5>
              </div>
          </div>

          <Paragraphs paragraph="I’m always open to discussing new ideas, collaborations, or freelance opportunities.”"/>
        
          <div className="row d-flex justify-content-center mt-4" style={{ width: "100%", textAlign: "center" }}>
              <h4 style={{ color: "var(--text-color)", fontWeight: "bold" }}>Social Media Links</h4>
              <hr style={{maxWidth: "600px"}}/>
              <div className="d-flex justify-content-center gap-3 gap-lg-5 gap-md-5">
              <a href="https://www.instagram.com/sandunsathyajith/" target="_blank" rel="noopener noreferrer" className="social-media-icons">
                  <Instagram size="35px" style={{color: "rgb(247, 31, 175)", margin: "10px"}}/>                            
              </a>
              <div style={{width: "3px", height: "50px", backgroundColor: "rgba(65, 65, 65, 0.61)"}}></div>
              
              <a href="https://x.com/SandunJay28" target="_blank" rel="noopener noreferrer" className="social-media-icons">
                  <Twitter size="35px" style={{color: "rgb(13, 207, 233)", margin: "10px"}}/>
              </a>
              <div style={{width: "3px", height: "50px", backgroundColor: "rgba(65, 65, 65, 0.61)"}}></div>
              
              <a href="https://www.linkedin.com/in/sandun-sathyajith/" target="_blank" rel="noopener noreferrer" className="social-media-icons">
                  <Linkedin  size="35px" style={{color: "rgb(0, 98, 245)", margin: "10px"}}/>
              </a>
              <div style={{width: "3px", height: "50px", backgroundColor: "rgba(65, 65, 65, 0.61)"}}></div>

              <a onClick={() => setIsContactBoxOpen(true)} className="social-media-icons">
                  <FaWhatsapp  size="35px" style={{color: "rgb(56, 218, 23)", margin: "10px"}}/>
              </a>

            {/* The LightBox */}
            {isContactBoxOpen && (
              <div id="contacting-light-box">
                <X className="close-icon" onClick={() => setIsContactBoxOpen(false)}/>
                <h3>💬 Let's Chat on WhatsApp</h3>
                <div className="whatsApp-number"> <FaWhatsapp className="whatsApp-icon"/>+94-760556766</div>
                <h5>Whether you're looking to collaborate, hire for a project, or just want to say hi — feel free to message me directly on WhatsApp.</h5>
                <h5 style={{fontStyle: "Italic", color: "#888888", fontSize: "0.875rem"}}>I’ll never share your contact details, and I typically reply within a few hours.</h5>
              </div>
            )}

            </div>
          </div>
        </div>
        </div>

        {/* Creating The Footer */}
        <div className="wave-top">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-opacity="1" d="M0,160L34.3,181.3C68.6,203,137,245,206,229.3C274.3,213,343,139,411,138.7C480,139,549,213,617,245.3C685.7,277,754,267,823,234.7C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,128C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
        </div>
        <div className="container-fluid footer">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center" style={{flexDirection: "column", textAlign: "center"}}>
                <a href="/" style={{textDecoration: "none", fontWeight: "bold", color: "rgb(255, 255, 255)"}}>
                  <img src="./src/assets/theLogo.jpg" alt="" style={{width: "90px", height: "90px"}}/>
                  <h4>Sandun Sathyajith</h4>
                </a>
                <h6 style={{color: "rgb(175, 172, 172)"}}>Crafiting clean, creative web experiences</h6>
                <p>Built with React, Tailwind</p>
                <p>Copyright: © 2025 Sandun Sathyajith. All rights reserved.</p>
              </div>

              <div className="col-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center mt-4 mt-md-0 mt-lg-0 mt-xl-0" style={{flexDirection: "column"}}>
              <h5><storng>Explore</storng></h5>
                <ul type="none" className="d-flex justify-content-center align-items-center gap-2 m-0 p-0" style={{textAlign: "center", flexDirection: "column"}}>
                <li className="footer-area d-flex justify-content-center" style={{position: "relative"}}>
                    <a className="footer-link" href="#aboutSection">About Me</a>
                    <div className="footer-underline"></div>
                </li>
                <li className="footer-area d-flex justify-content-center" style={{position: "relative"}}>
                    <a className="footer-link" href="#projectSection">Projects</a>
                    <div className="footer-underline"></div>
                </li>
                <li className="footer-area d-flex justify-content-center" style={{position: "relative"}}>
                    <a className="footer-link" href="#experienceSection">Experience</a>
                    <div className="footer-underline"></div>
                </li>
                <li className="footer-area d-flex justify-content-center" style={{position: "relative"}}>
                    <a className="footer-link" href="#contactSection">Contact</a>
                    <div className="footer-underline"></div>
                </li>
                <button className="resume-button">Download Resume</button>
                </ul>
              </div>

              <div className="col-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center mt-md-4 mb-md-4 mt-4 mt-lg-0 mt-xl-0" style={{flexDirection: "column"}}>
              <h5><storng>Contact Me</storng></h5>
                <ul type="none" className="d-flex justify-content-center align-items-center gap-2 m-0 p-0 mt-2" style={{textAlign: "center", flexDirection: "column"}}>
                <li style={{position: "relative"}}>
                    <MailPlus className="me-2"/>sandunsathyajith@gmail.com
                </li>
                <li style={{position: "relative"}}>
                  <div className="d-flex gap-4 justify-content-center align-items-center">
                    <a href="https://www.instagram.com/sandunsathyajith/" target="_blank" rel="noopener noreferrer" className="contact-links"><Instagram/> </a>
                    <a href="https://x.com/SandunJay28" target="_blank" rel="noopener noreferrer" className="contact-links"><Twitter/></a>
                    <a href="https://github.com/SandunJayalath/" target="_blank" className="contact-links" rel="noopener noreferrer"><Github/></a>
                  </div>
                </li>
                </ul>
              </div>

            </div>
          </div>
          <a href="#aboutSection" className="back-icon" style={{textDecoration: "none"}}>
            <div>Back to Top <ArrowUp/> </div>
          </a>
        </div>
        </>
    );
}
export default HomePage;
