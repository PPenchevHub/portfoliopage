import React from 'react'

function ServiceSection({image, title, text}) {
    return (
        <div className="serviceSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt=""/>
                    <h6 className="s-title">{title}</h6>
                    <p className="s-text">
                      {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
