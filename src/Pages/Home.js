import React from 'react'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import TypeWriter from 'react-typewriter';

const Home = () => {

var app = document.getElementById('terminal');

var typewriter = new TypeWriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Tiffany, and I am a frontend dev and wannabe hacker.']
    });


    return (<div className="backgroundHolder">
        <div className="HomePage">
            <div className="hero">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, i am 
                        <span> Plamen Penchev </span>
                    </h1>
                    <p className="h-sub-text">
                    </p>
                    <div className="icons">
                        <Link className="icon-holder">
                            <FontAwesomeIcon icon={faFacebook} className="icon fa"/>
                        </Link>
                        <Link className="icon-holder">
                            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </Link>
                         <Link className="icon-holder">
                            <FontAwesomeIcon icon={faLinkedin} className="icon ln"/>
                        </Link>
                    </div>
                </header>
            </div>
        </div>
      <main id="container">
  <div id="terminal">
    <section id="terminal__bar">          
      <div id="bar__buttons">            
        <button className="bar__button" id="bar__button--exit">&#10005;</button>            
        <button className="bar__button">&#9472;</button>                
        <button className="bar__button">&#9723;</button>          
      </div>          
      <p id="bar__user">Terminal</p>        
    </section>        
    <section id="terminal__body">          
      <div id="terminal__prompt">            
        <span id="terminal__prompt--user">ppenchev:</span>            
        <span id="terminal__prompt--location">~</span>            
        <span id="terminal__prompt--bling">$ </span>            
        <TypeWriter className="typeWriter" typing={1}> Hey, this is my personal Portfolio/Blog Website where can you 
        learn about what i do and how i do it, and hire me if you like what you see</TypeWriter>
        <span id="terminal__prompt--cursor"></span>    
      </div>        
    </section>      
  </div>    
</main>
        </div>
    )
}

export default Home
