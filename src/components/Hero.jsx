import React from 'react'
import hero from '../images/hero-img.svg'

function Hero() {
    return (
        <div className='hero'>
            <div className="img">
                <img src={hero} className='hero-img' alt="hero-img" />
            </div>
            <section className="heading">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </section>
        </div>
    )
}

export default Hero
