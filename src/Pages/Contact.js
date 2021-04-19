import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import Title from '../Components/Title'
import ContactForm from '../Components/ContactForm'


function Contact() {
    return (
        <div>
        <div className="contact-title">
                <Title title={'Contact Me'} span={'Contact me'}/>
        </div>
        <div className="ContactPage">
            <div className="contact-form">
                <ContactForm/>
            </div>
            <div className="contact-section"> 
                <ContactItem icon={phone} text1={'+4915782779427'} title={'Phone'}/>
                <ContactItem icon={email} text1={'ppenchev73@gmail.com'} title={'Email'}/>
            </div>
        </div>
        </div>
    )
}

export default Contact
