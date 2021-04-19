import React from 'react'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="HomePage">
            <div className="hero">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, i am 
                        <span> Plamen Penchev </span>
                    </h1>
                    <p className="h-sub-text">
                        Software Engineer something something 
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
    )
}

export default Home
