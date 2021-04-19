import React from 'react'
import ImageSection from '../Components/ImageSection'
import ServiceSection from '../Components/ServiceSection'
import Title from '../Components/Title'
import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'

function About() {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About me'}/>
            <ImageSection/>
            <Title title={'Services'} span={'Services'}/>
            <div className="service-container">
                <ServiceSection image={design} title={'Front End'} text={'based on design template'}/>
                <ServiceSection image={design} title={'Back End'} text={'powerfull functionality'}/>
                <ServiceSection image={design} title={'Wordpress'} text={'dream website in just hours'}/>
                <ServiceSection image={intelligence} title={'SEO'} text={'optimize everything'}/>

            </div>
        </div>
    )
}

export default About
