import React from 'react'
import about from '../img/about.png'

function ImageSection() {
    return (
        <div className="imageSection">
            <div className="img">
                <img src={about} alt=""></img>
            </div>
            <div className="about-info">
                <h4>I am<span> Plamen Penchev</span></h4>
                <p className="about-text">
                    random text hier to show me 
                      random text hier to show me 
                        random text hier to show me 
                          random text hier to show me 
                            random text hier to show me 
                              random text hier to show me 
                </p>
                <div className="about-details">
                      <div className="left-Section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                      </div>
                      <div className="right-Section">
                        <p>: Plamen Penchev</p>
                        <p>: 26</p>
                        <p>: Bulgarian</p>
                        <p>: English, German, Bulgarian, Russian</p>
                        <p>: Berlin, Germany</p>
                      </div>              
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection
