import React from 'react'
import star from '../images/Star.svg'
import swimmer from '../images/swimmer.svg'
import wedding from '../images/wedding-photography.svg'
import mountainBike from '../images/mountain-bike.svg'

function Cards() {
  return (
    <section className='cards'>
      <div className="card">
        <div className="tag">SOLD OUT</div>
        <div className="img">
          <img src={swimmer} alt="" />
        </div>
        <div className="details">
          <div className="ratting">
            <img src={star} alt="" />
            &nbsp; 5.0 &nbsp;
            <span className='light-color'>
              (6) &middot; USA
            </span>
          </div>
          <div className="line">
            Life lessons with Katie Zaferes
          </div>
          <div className="rate">
            <span className='bold-text'>From $136</span> / person
          </div>
        </div>
      </div>

      <div className="card">
      <div className="tag">ONLINE</div>
        <div className="img">
          <img src={wedding} alt="" />
        </div>
        <div className="details">
          <div className="ratting">
            <img src={star} alt="" />
            &nbsp; 5.0 &nbsp;
            <span className='light-color'>
              (30) &middot; USA
            </span>
          </div>
          <div className="line">
            Learn wedding photography
          </div>
          <div className="rate">
            <span className='bold-text'>From $125</span> / person
          </div>
        </div>
      </div>

      <div className="card">
        <div className="img">
          <img src={mountainBike} alt="" />
        </div>
        <div className="details">
          <div className="ratting">
            <img src={star} alt="" />
            &nbsp; 4.8 &nbsp;
            <span className='light-color'>
              (2) &middot; USA
            </span>
          </div>
          <div className="line">
            Group Mountain Biking
          </div>
          <div className="rate">
            <span className='bold-text'>From $50</span> / person
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
